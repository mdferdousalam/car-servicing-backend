import { IService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceIntoDB = async (serviceData: IService) => {
  const service = new ServiceModel(serviceData);
  return await service.save();
};



export const ServiceServices = {
  createServiceIntoDB,
};
