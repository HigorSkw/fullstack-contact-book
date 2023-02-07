import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCustomer, NameCustomer, InfoCustomer } from "./styles";

import { ICustomer } from "../../context/GlobalInterfaces";
interface ICustomerProps {
  customer: ICustomer;
}

export const CustomerCard = ({ customer }: ICustomerProps) => {
  const { setCustomer, setDelCustomerModal, setEditCustomerModal } =
    useContext(GlobalContext);

  const handleClickDel = () => {
    setCustomer(customer);
    setDelCustomerModal(true);
  };

  const handleClickUpdate = () => {
    setCustomer(customer);
    setEditCustomerModal(true);
  };

  return (
    <ContainerCustomer>
      <NameCustomer>
        <h3>Nome: {customer.name}</h3>
      </NameCustomer>

      <InfoCustomer>
        <div>
          <div>
            <h3>Email: {customer.email}</h3>
          </div>
          <div>
            <h3>Telefone: {customer.telefone}</h3>
          </div>
        </div>
        <div>
          <FaUserEdit onClick={() => handleClickUpdate()} />
          <FaTrashAlt onClick={() => handleClickDel()} />
        </div>
      </InfoCustomer>
    </ContainerCustomer>
  );
};
