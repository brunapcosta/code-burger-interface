import LocalMallIcon from '@mui/icons-material/LocalMall'
import QueueIcon from '@mui/icons-material/Queue'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: LocalMallIcon
    },
    {
        id: 2,
        label: 'Lista de Produtos',
        link: paths.ListProducts,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: QueueIcon
    }
]

export default listLinks