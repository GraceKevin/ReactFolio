import React from "react";

function Footer() {
  return (
    <footer>

            <h2>© Kevin Grace</h2>

            <div class="footer-flex">
                {/* <!--  Linkedin Link --> */}
                <a href="https://www.linkedin.com/in/kevin-grace-2a780267/" target="_blank">
                    {/* <!-- https://brand.linkedin.com/downloads--> */}
                    <img src="./assets/images/LI-Logo.png" alt="Linkedin logo."/>
                </a>

                {/* <!-- https://github.com/logos for Logo download --> */}
                
                <a href="https://github.com/GraceKevin" target="_blank">
                    {/* <!-- https://www.freepnglogos.com/images/512x512-logo-27148.html --> */}
                    <img src="./assets/images/GitHub-Mark-Light-120px-plus.png" class="github" alt="Github." />
                </a>
                
            </div>
        </footer>
  );
}

export default Footer;