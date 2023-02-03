import { ContainerHomePage, ButtonsBox } from "./styles";
import { HeaderComponents } from "../../components/Header";
import CustomerRegister from "../../components/CustomerRegister";
import { CustomerCard } from "../../components/CustomerCard";
import { DeleteUserModal } from "../../components/DeleteUserModal";

import { GlobalContext } from "../../context/GlobalContext";
import { ICustomer } from "../../context/GlobalInterfaces";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import EditUserModal from "../../components/UpdateUserModal";
import { DeleteCustomerModal } from "../../components/DeleteCustomerModal";
import EditCustomerModal from "../../components/UpdateCustomerModal";

const HomePage = () => {
  const {
    getSelfUser,
    user,
    delCustomerModal,
    setDelCustomerModal,
    editCustomerModal,
  } = useContext(GlobalContext);

  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const navigate = useNavigate();

  const token = window.localStorage.getItem("@contact-book:token");

  useEffect(() => {
    const token = window.localStorage.getItem("@contact-book:token");

    if (token === null) {
      navigate("*", { replace: true });
    }

    getSelfUser();
  }, [token]);

  return (
    <>
      {deleteUserModal && (
        <DeleteUserModal setDeleteUserModal={setDeleteUserModal} />
      )}

      {editUserModal && <EditUserModal setEditUserModal={setEditUserModal} />}

      {editCustomerModal && <EditCustomerModal />}

      {delCustomerModal && (
        <DeleteCustomerModal setDelCustomerModal={setDelCustomerModal} />
      )}

      <HeaderComponents />
      <ContainerHomePage>
        <div>
          <h2>{user?.name}</h2>
          <ButtonsBox>
            <FaUserEdit onClick={() => setEditUserModal(!editUserModal)} />
            <FaTrashAlt onClick={() => setDeleteUserModal(!deleteUserModal)} />
          </ButtonsBox>
          <span>
            Email: <h3>{user?.email}</h3>
          </span>
          <h2>Telefone: {user?.telefone}</h2>
        </div>
        <CustomerRegister />
        <div>
          {user?.customers &&
            user.customers.map((customer) => (
              <CustomerCard customer={customer} key={customer.id} />
            ))}{" "}
        </div>

        <div>Todos os cadastros abaixo deste usuário</div>
      </ContainerHomePage>
    </>
  );
};

export default HomePage;
