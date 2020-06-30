import React from 'react'
import { Navbar, NavDropdown, Nav, FormControl, Button } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import { FaSearch } from 'react-icons/fa'


export default function Template() {
    {
        return (
            <>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="search" variant="flat">
                                <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>

                            <Nav.Link href="#home" >Início</Nav.Link>
                            <NavDropdown title="Receitas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" variant="dark">Asiática</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Brasileira</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mexicana</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pratos rápidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Low Carb</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Button id="login" variant="flat">
                            Login
                            </Button>
                        <Button id="login" variant="flat">
                            Cadastro
                            </Button>
                    </Navbar.Collapse>
                </Navbar>


                {/* SEU CODIGO AQUI! */}

            </>
        )
    }
}






        // <div id="home-container">
        //     <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
        //     <b.Navbar bg="light" expand="lg">
        //         <b.Navbar.Brand href="#home">
        //             <b.Image src={logoImg} />
        //         </b.Navbar.Brand>
        //         <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <b.Navbar.Collapse id="basic-navbar-nav">
        //             <b.Nav className="mr-auto">
        //                 <b.Nav.Link href="#home">Home</b.Nav.Link>
        //                 <b.Nav.Link href="#link">Link</b.Nav.Link>
        //                 <b.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <b.NavDropdown.Item href="#action/3.1">Action</b.NavDropdown.Item>
        //                     <b.NavDropdown.Item href="#action/3.2">Another action</b.NavDropdown.Item>
        //                     <b.NavDropdown.Item href="#action/3.3">Something</b.NavDropdown.Item>
        //                     <b.NavDropdown.Divider />
        //                     <b.NavDropdown.Item href="#action/3.4">Separated link</b.NavDropdown.Item>
        //                 </b.NavDropdown>
        //             </b.Nav>
        //             <b.Form inline>
        //                 <b.FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //                 <b.Button variant="primary">Search</b.Button>
        //             </b.Form>
        //         </b.Navbar.Collapse>
        //     </b.Navbar >
        // </div>

        // <nav class="navbar navbar-color-on-scroll  fixed-top navbar-expand-lg bg-dark" color-on-scroll="100" id="sectionsNav">
        //     <div class="container">
        //         <div class="navbar-translate">
        //             <a class="navbar-brand" href="https:demos.creative-tim.com/material-kit/index.html">
        //                 <img src={logoImg} alt="..." />
        //             </a>
        //             <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="sr-only">Toggle navigation</span>
        //                 <span class="navbar-toggler-icon"></span>
        //                 <span class="navbar-toggler-icon"></span>
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //         </div>
        //         <div class="collapse navbar-collapse">
        //             <ul class="navbar-nav ml-auto">
        //                 <form class="form-inline ml-auto">
        //                     <div class="form-group has-white">
        //                         <input type="text" class="form-control" placeholder="Search" />
        //                     </div>
        //                     <button type="submit" class="btn btn-white btn-raised btn-fab btn-round">
        //                         <i class="material-icons">search</i>
        //                     </button>
        //                 </form>
        //                 <li class="nav-item">
        //                     <a href="#" class="nav-link">
        //                         <button variant="contained" color="primary" class="btn btn-white btn-link">Início</button>
        //                     </a>
        //                 </li>

        //                 <li class="dropdown nav-item">
        //                     <a href="javascript:;" class="dropdown-toggle nav-link" data-toggle="dropdown">Receitas</a>
        //                     <div class="dropdown-menu">
        //                         <h6 class="dropdown-header">Dropdown header</h6>
        //                         <a href="javascript:;" class="dropdown-item">Action</a>
        //                         <a href="javascript:;" class="dropdown-item">Another action</a>
        //                         <a href="javascript:;" class="dropdown-item">Something else here</a>
        //                         <div class="dropdown-divider"></div>
        //                         <a href="javascript:;" class="dropdown-item">Separated link</a>
        //                         <div class="dropdown-divider"></div>
        //                         <a href="javascript:;" class="dropdown-item">One more separated link</a>
        //                     </div>
        //                 </li>

        //                 <li class="nav-item">
        //                     <a href="#" class="nav-link">
        //                         <button class="btn btn-danger btn-round">Login</button>
        //                     </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a href="#" class="nav-link">
        //                         <button class="btn btn-danger btn-round">Cadastrar</button>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        //
