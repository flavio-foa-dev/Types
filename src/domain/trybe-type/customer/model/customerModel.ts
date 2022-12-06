import { ICustomer } from "../interface/customer";

export default class CustomerModel {
  private client: any;
  AllCustomers: string;
  customerById: string;
  customerSave: string;
  customerDelete: string;
  customerUpdate: string;

  constructor(client: any) {
    this.client = client;
    this.AllCustomers = 'SELECT * FROM tbl_customer'
    this.customerById = "SELECT * FROM tbl_customer Where id = $1"
    this.customerSave = 'INSERT INTO tbl_customer(name, email, password) VALUES ($1, $2, $3) RETURNING *'
    this.customerDelete = 'DELETE FROM tbl_customer WHERE id = $1'
    this.customerUpdate = 'UPDATE tbl_customer SET name=$1, email=$2, password=$3 WHERE id=$4'

  }

  async getAllCustomers(): Promise<ICustomer[]> {
    const result = await this.client.query(this.AllCustomers);
    const custumer = result.rows
    return custumer as ICustomer[];
  }

  async getByIdCustomer(id: number): Promise<ICustomer[]> {
    const result = await this.client.query(this.customerById, [id])
    const custumer = result.rows
    return custumer as ICustomer[];
  }

  async saveCustomer(values:ICustomer):Promise<void> {
    const parseCustumer = Object.values(values)
    await this.client.query(this.customerSave, parseCustumer)


  }

  async updateCustomer(custumer: ICustomer, id: number): Promise<void> {
    const parseCustumer = Object.values(custumer)
    await this.client.query(this.customerUpdate, [...parseCustumer, id])

  }


  async deleteCustomer(id: number): Promise<void> {
    await this.client.query(this.customerDelete, [id])

  }

}