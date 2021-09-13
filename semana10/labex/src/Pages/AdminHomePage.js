
import {useHistory} from 'react-router-dom';
import Styled from 'styled-components';

const CardOfTripsStyled = Styled.button`
border:none;
width:50vw;
text-align:start;
&:hover{
    cursor:pointer;
    background-color:gray;
}`

function AdminHomePage() {
    
    const history = useHistory()

    const goBackToTheinitialPageWithoutLogout = ()=>{
        history.push('/')
    }
    const goToCreateTripPage = ()=>{
        history.push('/admin-create-trip')
    }

    const logoutFromTheAdminPainel = ()=>{
        history.replace('/admin-login')
    }

    const goToTheCardOfTripDetailsOnlyForAdmin = () =>{
        history.push('/trip-details-for-admin')
    }

    return (
        <div>
            <h2>Painel administrativo</h2>
            <div>
            <button onClick={goBackToTheinitialPageWithoutLogout}>Voltar</button>          
            <button onClick={goToCreateTripPage}>Criar viagem</button>
            <button onClick={logoutFromTheAdminPainel}>Logout</button>
            </div>
            <CardOfTripsStyled onClick={goToTheCardOfTripDetailsOnlyForAdmin}><div><h5>Viagem</h5></div></CardOfTripsStyled>

        </div>
    );
};
export default AdminHomePage;