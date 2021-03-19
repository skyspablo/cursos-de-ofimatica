import React, {useEffect, useState} from 'react';


const ContactForm = (props) => {
    return (
        <>
            <form className={'contact-form'} >
                <div className={'input-group'}>
                    <input type="text" name={'nombre'} placeholder={'Nombre y apellidos'} required={true}/>

                    <input type="email" name={'email'} placeholder={'Email'} required={true} />
                </div>

                <div className={'input-group'}>
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder={'Mensaje'} />
                </div>

                <button type={'button'} className={'btn-primary'}> Enviar </button>
            </form>
        </>
    );
}

export default ContactForm;