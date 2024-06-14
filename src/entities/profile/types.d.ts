declare namespace ProfileEntity {
  export interface LayoutHeaderAction {
    title: string;
    description?: string;
    icon: React.ReactNode;
    onClick: () => void;
  }
  export interface Address {
    id: number;
    address: string;
  }
  export interface DeliveryComponent {
    address: Address;
    index: number;
    children?: React.ReactNode;
  }
}
