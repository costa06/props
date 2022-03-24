import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './avatar';

const Profil = props => {
    const profils = props.profils

    function handleName (user) {
        alert (`Bonjour ${user}`)
    }
    const styleBtn = {padding:"0.5em 1em", background: "blue",textAlign:"center", border:"0", color:"#fff"}

    return (
        <>
        {profils.map (profil => 
            <div className='content-profil'>
                <Avatar>
                    {profil.image}
                </Avatar>
                <h1>{profil.firstName} {profil.lastName}</h1>
                <h2>{profil.profession}</h2>
                <p>{profil.bio}</p>
                <button style={styleBtn} onClick={() => handleName(profil.firstName)}>Click Me !</button> 
            </div>
        )}
        </>
    );
}

Profil.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
  };

export default Profil;

