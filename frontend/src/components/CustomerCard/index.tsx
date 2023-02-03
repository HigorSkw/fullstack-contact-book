import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { ICustomer } from "../../context/GlobalInterfaces";
interface ICustomerProps {
  customer: ICustomer;
}

export const CustomerCard = ({ customer }: ICustomerProps) => {
  const { setCustomer, user, setDelCustomerModal, setEditCustomerModal } =
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
    <>
      <div>
        {customer.email}
        {customer.name}
        {customer.telefone}
        <FaUserEdit onClick={() => handleClickUpdate()} />
        <FaTrashAlt onClick={() => handleClickDel()} />
      </div>
    </>
  );
};
