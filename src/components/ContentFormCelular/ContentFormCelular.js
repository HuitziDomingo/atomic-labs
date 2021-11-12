import comiendo from '../../assets/img/comiendo.png'
import unocolor from '../../assets/img/unocolor-c.png'
import dos from '../../assets/img/dos.png'
import tres from '../../assets/img/tres.png'
import cuatro from '../../assets/img/cuatro.png'
import unosmall from '../../assets/img/unosmall.png'
import palomita from '../../assets/img/palomita.png'
import doscolor from '../../assets/img/doscolor.png'
import dossmall from '../../assets/img/dossmall.png'


import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useNavigate, NavLink } from 'react-router-dom'

import './ContentFormCelular.scss'

const ContentFormCelular = () => {
    const navigate = useNavigate()

    // Validacion delformulario
    const formik = useFormik({
        initialValues: {
            num: '',
        },
        validationSchema: Yup.object({
            num: Yup.number(10).min(10, 'El numero es requerido').required('Este campo es requerido'),
        }),
        onSubmit: values => {
            try {
                console.log(values)
                navigate('/')
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
                        <img src={palomita} alt={palomita} />
                        <img src={doscolor} alt={doscolor} />
                        <img src={tres} alt={tres} />
                        <img src={cuatro} alt={cuatro} />
                    </div>
                    <div className="progress mb-1 mt-2">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                    </div>
                    
                    <NavLink to="/form">
                        <p className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                            </svg>
                            Regresar
                        </p>
                    </NavLink>

                    {/* Titulos */}
                    <div class="__aro">
                        <img src={dossmall} className="img-fluid mr-4" />
                        <h3 className="text-white">
                            VALIDA TU <span>CELULAR</span>
                        </h3>
                    </div>

                    <p className="text-white mt-3">Necesitamos validar tu numero para continuar</p>
                    <p className="text-white">Ingresa tu numero a 10 digitos y te enviaremos un codigo SMS.</p>

                    {/* Formulario */}
                    <form className="form-group" onSubmit={formik.handleSubmit}>
                        <div className="mb-3 input-group">
                            <label htmlFor="num" className="form-label text-white">Numero de Celular</label>
                            <input type="number" className="form-control" id="num" name="num" value={formik.values.num} onChange={formik.handleChange} />
                            
                        </div>
                        {
                            formik.touched.num && formik.errors.num ? (
                                <p className="__error">{formik.errors.num}</p>
                            ) : null
                        }
                        {
                            formik.values.num  ? (
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

export default ContentFormCelular
