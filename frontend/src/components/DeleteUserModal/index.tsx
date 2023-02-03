import { Container, SectionContainer } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useContext } from "react";

export interface IDeleteUserModalProps {
  setDeleteUserModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteUserModal = ({
  setDeleteUserModal,
}: IDeleteUserModalProps) => {
  const navigate = useNavigate();

  const { deleteUser } = useContext(GlobalContext);

  const handleDelete = () => {
    setDeleteUserModal(false);
    deleteUser();
  };

  return (
    <Container>
      <SectionContainer>
        <h2>Deletar essa conta?</h2>
        <div>
          <Button text="Deletar" color="white" onClick={() => deleteUser()} />
          <Button
            text="Cancelar"
            color="white"
            onClick={() => setDeleteUserModal(false)}
          />
        </div>
      </SectionContainer>
    </Container>
  );
};
