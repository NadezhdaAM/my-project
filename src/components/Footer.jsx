import React from 'react'

const Footer = () => {
  return (
<div className='footer'>  
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/logo.png' className='bi me-2' width={250} height={140}>
                      </img>
                  </a>
                <p>
                 
                </p>
</div>
                      <div className='col mb-2'>

                      </div>
                    <div className='col mb-4'>
                        <h5>Контакты</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Россия, Свердловская обл., г. Каменск-Уральский</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Телефон: +7 999-999-99-99</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col mb-4'>
                        <h5>Мы в соц.сетях</h5>
                        <ul class="social-icons">
                         <li><a class="social-icon-vk" href="#" title="Мы в ВКонтакте" target="_blank" rel="noopener"></a></li>
                        </ul>
                        
                        



                    </div>
          
        </footer>
    </div>
</div>
  )
}

export default Footer