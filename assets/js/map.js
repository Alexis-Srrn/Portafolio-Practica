document.addEventListener("DOMContentLoaded", (event) =>{
    
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheiht="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.868308023364!2d-98.19628873047188!3d19.04292006659709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0e64bc3c7cf%3A0x48dd9457d133f9ac!2sAv.%20Reforma%20293%2C%20Centro%20hist%C3%B3rico%20de%20Puebla%2C%2072000%20Puebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1689806385138!5m2!1ses-419!2smx"></iframe>
        `;
    }, 500);


});