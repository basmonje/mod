import React from "react";
import { Modal, Icon } from "semantic-ui-react";
import styled from "styled-components";

export default function ModalComponent(props) {
  const { show, setShow, title, children, ...rest } = props;

  const onClose = () => setShow(false);

  return (
    <Modal className="basic-modal" open={show} onClose={onClose} {...rest}>
      <Modal.Content>
        <Content onClose={onClose} />
      </Modal.Content>
    </Modal>
  );
}

function Content({ onClose }) {
  return (
    <Wrapper>
      <Icon name="close" onClick={onClose} />
      <Text>
        <h1>Mantente actualizado</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          ab.
        </p>
        <span>Nuevo contenido</span>
      </Text>
      <Form>
        <input type="text" placeholder="Tu correo" />
        <input type="text" placeholder="Tu nombre" />
        <button>Enviar peticion</button>
      </Form>
    </Wrapper>
  );
}

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 20px;
    line-height: 34px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  max-width: 350px;

  input {
    width: 100%;
    height: 48px;
    text-align: left;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    padding: 0 10px;
    margin-bottom: 10px;
    outline: none;
  }

  button {
    width: 100%;
    min-height: 48px;
    border: 0px solid #fff;
    border-radius: 19px;
    background-color: #3198ff;
  }
`;
