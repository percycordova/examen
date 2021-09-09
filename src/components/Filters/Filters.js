import React from 'react'

const Filters = ({ handleChange }) => {
    const status = [
        {
            name: 'Inactivo',
            codigo: 0
        },
        {
            name: 'Activo',
            codigo: 1
        },
        {
            name: 'Pendiente validación inicial',
            codigo: 2
        },
        {
            name: 'Rechazo inicial',
            codigo: 3
        },
        {
            name: 'Pagar Despues',
            codigo: 4
        },
        {
            name: 'Deuda 1',
            codigo: 5
        },
        {
            name: 'Deuda 2',
            codigo: 6
        },
        {
            name: 'Deuda 3',
            codigo: 7
        },
        {
            name: 'PreLiquidacion',
            codigo: 8
        },
        {
            name: 'Congelado',
            codigo: 9
        },
        {
            name: 'Pendiente validación cuota',
            codigo: 10
        },
        {
            name: 'Rechazo cuota',
            codigo: 11
        },
        {
            name: 'Suscripción finalizada',
            codigo: 12
        },
        {
            name: 'Pendiente validación migración',
            codigo: 13
        },
        {
            name: 'Rechazo migración',
            codigo: 14
        },
        {
            name: 'Liquidacion',
            codigo: 15
        },
    ]

    return (

        <select
            name="status"
            className="form-control form-control-lg mb-3 mt-1"
            onChange={(e) => handleChange(e)}
        >
            {
                status.map((statu) =>
                    <option key={statu.codigo}
                        value={statu.codigo}>
                        {statu.name}
                    </option>)
            }

        </select>


    )
}

export default Filters
