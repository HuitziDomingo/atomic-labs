import comiendo from '../../assets/img/comiendo.png'

import './ContentForm.scss'

const ContentForm = () => {
    return (
        <div className="__cont">
            <div class="row">
                <div class="col-md-8">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}></div>
                    </div>

                    {/* Formulario */}
                    <form className="form-group">
                        <div class="input-group">
                            <label className="text-white">Nombre (s)</label>
                            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                            <span class ="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </span>
                            <label className="text-white">Apellido</label>
                            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                            <span class ="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </span>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <img src={comiendo} alt="" srcset=""/>
                </div>
            </div>
        </div>
    )
}

export default ContentForm
