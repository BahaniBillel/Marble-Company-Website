import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadcrumbComponent() {
    return (
        <div>
             <Breadcrumb>
                <Breadcrumb.Item href="#">Acceuil</Breadcrumb.Item>
                <Breadcrumb.Item href="./Products">
                    Produits
                </Breadcrumb.Item>
                <Breadcrumb.Item href="./Offers">Offres</Breadcrumb.Item>
                <Breadcrumb.Item href="./Projects">Projets</Breadcrumb.Item>
                <Breadcrumb.Item href="/Novelty">Nouveautes</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
