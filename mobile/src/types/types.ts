export interface ItemType {
  id: string;
  value: string;
  completed: boolean;
  editing: boolean;
}

export interface ContextStatesType {
  items: ItemType[];
  filter: string;
}

export interface NetworkClientType {
  postRequest: Function;
  getRequest: Function;
  putRequest: Function;
  deleteRequest: Function;
}

export interface TodoFooterProps {
  itemsAmount: number;
  showClearCompleted: boolean;
}

export interface TodoItemProps {
  item: ItemType;
}

export interface DeleteHeaders {
  headers: string;
}

export interface AddServiceProps {
  dryerId: string;
}

export interface ClientsProps {
  clients: IClient[];
}

export interface IService {
  id: string;
  checked: boolean;
  price: number;
  name: string;
}

export interface DryerProps {
  money: number;
  services: IService[];
  userId: string;
  dryer: IDryer;
  firstName: string;
  lastName: string;
  withdrawMoney: Function;
}

export interface DryersProps {
  dryers: IDryer[];
}

export interface EditOrderProps {
  order: IOrder;
  services: IService[];
}

export interface IOrder {
  id: string;
  price: number;
  firstName: string;
  lastName: string;
  date: Date;
  status: string;
  email: string;
  service: string;
  dryerId: string;
  returnDescription: string;
}

export interface IDryer {
  id: string;
  name: string;
  description: string;
  images: string[];
  servicesDescription: string;
}

export interface EditServiceProps {
  service: IService;
}

export interface MyOrdersProps {
  orders: IOrder[];
  returnMoney: Function;
}

export interface OrdersProps {
  orders: IOrder[];
}

export interface ServicesProps {
  getServices: Function;
  services: IService[];
}

export interface UserPanelProps {
  money: number;
  userId: string;
  firstName: string;
  lastName: string;
}

export interface IClient {
  id: string;
  email: string;
  isAdmin: boolean;
}
