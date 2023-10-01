'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendForm } from '../../utils/GetForm'

const FormRegister = () => {
    const msReque = 'Campo requerido';
    const validationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo requerido'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await sendForm(values)

            if (response.ok) {
                // La solicitud se realizó correctamente
                resetForm();
                toast.success("Formulario enviado correctamente");
            } else {
                // Ocurrió un error al enviar la solicitud

                toast.error("Error al enviar el formulario");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            toast.error("Error al enviar el formulario");
        }

        setSubmitting(false);
    };



    return (
        <div className='w-full'>
            <ToastContainer />
            <Formik
                initialValues={{ email: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form >
                        <div className="flex shadow justify-between mt-6 w-72 md:w-10/12 lg:w-9/12 lg:max-w-xl h-13 relative p-[2px] rounded-full bg-white transition mx-auto lg:mt-12">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="z-10 w-44 md:w-full h-11 px-6 outline-none bg-transparent text-sm text-gray-700"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="z-10 w-28 md:w-48 h-11 flex justify-center items-center bg-black rounded-full text-white text-xs cursor-pointer transition outline-0 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">Join the waitlist
                            </button>
                        </div>
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormRegister