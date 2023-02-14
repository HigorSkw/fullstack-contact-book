import {
  ContainerHomePage,
  ButtonsBox,
  ContainerUser,
  SectionMain,
  SectionContacts,
} from "./styles";
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
    editUserModal,
    setEditUserModal,
  } = useContext(GlobalContext);

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
        <ContainerUser>
          <ButtonsBox>
            <h2>{user?.name} </h2>
            <FaUserEdit onClick={() => setEditUserModal(!editUserModal)} />
            <FaTrashAlt onClick={() => setDeleteUserModal(!deleteUserModal)} />
          </ButtonsBox>
          <span>
            Email: <h3>{user?.email}</h3>
          </span>
          <span>
            Telefone:
            <h3> {user?.telefone}</h3>
          </span>
        </ContainerUser>

        <SectionMain>
          <CustomerRegister />

          <SectionContacts>
            <section className="container-contatos">
              <div className="wrap-contatos">
                <span className="title-customers">Lista de Contatos</span>

                {user?.customers &&
                  user.customers.map((customer) => (
                    <CustomerCard customer={customer} key={customer.id} />
                  ))}
              </div>
            </section>
          </SectionContacts>
        </SectionMain>
      </ContainerHomePage>
    </>
  );
};

export default HomePage;
