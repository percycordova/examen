
export const getData = async (state=10) => {

    const url = `https://servicios.inclubtest.online:2053/api/suscription/all/state/${state}`;
    const resp = await fetch(url);
    
    //console.log("la respuesta",resp);
    const { objModel:data } = await resp.json(); 
    const userData = data.map(user => {

        return {
            id: user.id,
            idUser: user.idUser,
            name: user.userResponseDto.name,
            lastname: user.userResponseDto.lastname,
            stateName: user.userResponseDto.stateName,
            nroDocument: user.userResponseDto.nroDocument,
        }
    });
    return userData;
}