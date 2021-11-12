import comiendo from '../../assets/img/comiendo.png'
import unocolor from '../../assets/img/unocolor-c.png'
import dos from '../../assets/img/dos.png'
import tres from '../../assets/img/tres.png'
import cuatro from '../../assets/img/cuatro.png'
import unosmall from '../../assets/img/unosmall.png'


import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import './ContentForm.scss'

const ContentForm = () => {


    const navigate = useNavigate()

    // Validacion delformulario
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, 'El nombre debe tener al menos 5 caracteres').required('Este campo es requerido'),
            lastName: Yup.string().min(5, 'El apellido debe tener al menos 5 caracteres').required('Este campo es requerido')
        }),
        onSubmit: values => {
            try {
                console.log(values)
                navigate('/form2')
            } catch (error) {
                console.log(error)
            }
        }
    })


    return (
        <div className="__cont">
            <div className="row">
                <div className="col-md-8">
                    {/* Numeros flotando */}
                    <div class="__cont__nums __cent__flex">
                        <img src={unocolor} alt={unocolor} />
                        <img src={dos} alt={dos} />
                        <img src={tres} alt={tres} />
                        <img src={cuatro} alt={cuatro} />
                    </div>
                    <div className="progress mb-5 mt-2">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                    </div>

                    {/* Titulos */}
                    <div class="__aro">
                        <img src={unosmall} className="img-fluid mr-4" />
                        <h3 className="text-white">
                            TE QUEREMOS <span>CONOCER</span>
                        </h3>
                    </div>

                    <p className="text-white mt-3">Queremos saber que eres tu, por favor ingresa los siguientes datos:</p>

                    {/* Formulario */}
                    <form className="form-group" onSubmit={formik.handleSubmit}>
                        <div className="mb-3 input-group">
                            <label htmlFor="nombre" className="form-label text-white">Nombre (s)</label>
                            <input type="text" className="form-control" id="nombre" name="name" value={formik.values.name} onChange={formik.handleChange} />
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </span>
                        </div>
                        {
                            formik.touched.name && formik.errors.name ? (
                                <p className="__error">{formik.errors.name}</p>
                            ) : null
                        }
                        <div className="mb-3 input-group">
                            <label htmlFor="apellido" className="form-label text-white">Apellidos</label>
                            <input type="text" className="form-control" id="apellido" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
                            <span class="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </span>
                        </div>
                        {
                            formik.touched.lastName && formik.errors.lastName ? (
                                <p className="__error">{formik.errors.lastName}</p>
                            ) : null
                        }
                        {
                            formik.values.name && formik.values.lastName ? (
                                <button type="submit">Enviar</button>
                            ) : <button className="disabled" type="submit" disabled>Enviar</button>
                        }
                    </form>
                </div>
                <div className="col-md-4">
                    <img src={comiendo} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default ContentForm
