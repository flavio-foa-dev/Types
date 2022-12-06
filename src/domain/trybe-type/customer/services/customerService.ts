import { ICustomer } from "../interface/customer";
import CustomModel from "../model/customerModel"
import { client } from '../../../../db/config/connection'

export default class customerService {
  model: CustomModel | undefined;
  constructor(){
    this.model = new CustomModel(client)
  }

  async getAllCustomers(): Promise<ICustomer[]> {
    const custumer = await this.model?.getAllCustomers()
    return custumer as ICustomer[];
  }

  async getByIdCustomer(id: number): Promise<ICustomer[]> {
    const custumer = await this.model?.getByIdCustomer(id)
    return custumer as ICustomer[];
  }

  async saveCustomer(values:ICustomer):Promise<void> {
    await this.model?.saveCustomer(values)
  }

  async updateCustomer(custumer: ICustomer, id: number): Promise<void> {
    await this.model?.updateCustomer(custumer, id)

  }

  async deleteCustomer(id: number): Promise<void> {
    await this.model?.deleteCustomer(id)
  }

}