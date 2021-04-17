import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Louis Martin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/about">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/experience">Experience</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                        <button type="button" class="btn btn-dark me-5" ><a class="nav-link"href = '/contact'>Contact Louis</a></button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
