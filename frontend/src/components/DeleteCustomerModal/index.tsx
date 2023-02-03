import { Container, SectionContainer } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useContext } from "react";

export interface IDeleteCustomerModalProps {
  setDelCustomerModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteCustomerModal = ({
  setDelCustomerModal,
}: IDeleteCustomerModalProps) => {
  const navigate = useNavigate();

  const { deleteCustomer } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteCustomer();
    setDelCustomerModal(false);
  };

  return (
    <Container>
      <SectionContainer>
        <h2> Deletar esse contato?</h2>
        <div>
          <Button text="Deletar" color="white" onClick={() => handleDelete()} />
          <Button
            text="Cancelar"
            color="white"
            onClick={() => setDelCustomerModal(false)}
          />
        </div>
      </SectionContainer>
    </Container>
  );
};
