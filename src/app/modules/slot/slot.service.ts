import { SlotModel } from "./slot.model";
import { ServiceModel } from "../service/service.model";
import { ISlot } from "./slot.interface";


const createSlotsIntoDB = async (
  serviceId: string,
  date: string,
  startTime: string,
  endTime: string
): Promise<ISlot[]> => {
  const serviceData = await ServiceModel.findById(serviceId);
  if (!serviceData) {
    throw new Error("Service not found");
  }

  const serviceDuration = serviceData.duration;

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / serviceDuration;

  const slots: ISlot[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = new Date(date);
    slotStartTime.setMinutes(startMinutes + i * serviceDuration);
    const slotEndTime = new Date(slotStartTime);
    slotEndTime.setMinutes(slotStartTime.getMinutes() + serviceDuration);

    slots.push({
        service: serviceId,
        date,
        startTime: `${slotStartTime.getHours()}:${slotStartTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`,
        endTime: `${slotEndTime.getHours()}:${slotEndTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`,
        isBooked: "available",
    } as unknown as ISlot);
  }

  const createdSlots = await SlotModel.insertMany(slots);
  return createdSlots;
};

const getAvailableSlotsFromDB = async (
  date?: string,
  serviceId?: string
): Promise<ISlot[]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = { isBooked: "available" };

  if (date) {
    query.date = date;
  }

  if (serviceId) {
    query.service = serviceId;
  }

  return await SlotModel.find(query);
};


export const SlotServices = {
  createSlotsIntoDB,
  getAvailableSlotsFromDB,
};
