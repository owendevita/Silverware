import React from 'react'
import SilverWareLogo from '../../../static/assets/SILVERWARE_LOGO.png'

const stylesheet = {
  logo: {
    maxWidth: '15%',
    height: 'auto'

  }
};

const LogoImageLabel = () => {
  return (
    <img style={stylesheet.logo} src={SilverWareLogo} alt="silverware logo" />
  )
}

export default LogoImageLabel