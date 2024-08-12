import { IService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceIntoDB = async (serviceData: IService) => {
  const service = new ServiceModel(serviceData);
  return await service.save();
};

const getServiceByIdFromDB = async (id: string) => {
  return await ServiceModel.findById(id);
};

const getAllServicesFromDB = async () => {
  return await ServiceModel.find({ isDeleted: false });
};

const updateServiceInDB = async (id: string, updateData: Partial<IService>) => {
  return await ServiceModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const softDeleteServiceInDB = async (id: string) => {
  return await ServiceModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
};

export const ServiceServices = {
  createServiceIntoDB,
  getServiceByIdFromDB,
  getAllServicesFromDB,
  updateServiceInDB,
  softDeleteServiceInDB,
};