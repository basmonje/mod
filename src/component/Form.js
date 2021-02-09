import React, { useState } from "react";
import { Form, Button, TextArea } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { postMessageContact } from "api/contact";

const FormContact = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      //   const response = await postMessageContact(formData);
      //   if (!response) {
      //     toast.error("Error al enviar formulario");
      //     setLoading(false);

      //     if (response.statusCode === 400 || response.statusCode === 401) {
      //       toast.error("Peticion mal efectuada");
      //       setLoading(false);
      //     }
      //   } else {
      //     toast.success("Mensaje enviado correctamente ☑️");
      //     formik.resetForm();
      //     setLoading(false);
      //   }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Form.Input
          name="lastname"
          type="text"
          label="Apellido"
          placeholder="Apellido"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={formik.errors.lastname}
        />
      </Form.Group>

      <Form.Field>
        <Form.Input
          icon="at"
          name="email"
          label="Correo electronico"
          placeholder="Correo electronico"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
      </Form.Field>
      <Form.Field
        name="message"
        control={TextArea}
        label="Mensaje"
        placeholder="Mensaje"
        onChange={formik.handleChange}
        value={formik.values.message}
        error={formik.errors.message}
      />
      <Button type="submit" color="teal" loading={loading}>
        Enviar
      </Button>
    </Form>
  );
};

function initialValues() {
  return {
    name: "",
    lastname: "",
    email: "",
    message: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required("Debe ingresar su nombre"),
    lastname: Yup.string().required("Debe ingresar su apellido"),
    email: Yup.string()
      .email("Invalid email")
      .required("Debe ingresar su email"),
    message: Yup.string().required("Debe ingresar un mensaje"),
  };
}

export default FormContact;
