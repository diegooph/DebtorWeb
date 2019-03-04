export default {

    userDTO: {
        getAllSelect: () =>
            getAllUser(),
        getUserList: () =>
            getUserList()

    },
    debtorDTO: {
        getAll: () =>
            getAllDebtor(),
        getUsersDebtor: () =>
            getUsersDebtor(),
        getById: debtorId =>
            getDebtorById(debtorId),
        DeleteById: debtorId =>
            deleteDebtor(debtorId),
        updateById: debtorId =>
            updateDebtor(debtorId),

        save: () =>
            addDebtor()

    }
};

function getUsersDebtor() {
    fetch("http://localhost:8080/debtor/usersdebtor")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (userDTO) {
                output += `<tr>
      <td>${userDTO.id}</td>
      <td>${userDTO.name}</td>
      <td>${userDTO.phone}</td>
      <td>${userDTO.email}v</td>
    </tr>
          `
            });
            document.getElementById("usersDebtor").innerHTML = output;
        })
}

function getUserList() {
    fetch("http://localhost:8080/user/all")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (userDTO) {
                output += `<tr>
      <td>${userDTO.id}</td>
      <td>${userDTO.name}</td>
      <td>${userDTO.phone}</td>
      <td>${userDTO.email}</td>
    </tr>
          `
            });
            document.getElementById("usersList").innerHTML = output;
        })
}

function getAllUser() {
    fetch('http://localhost:8080/user/all')
        .then((res) => res.json())
        .then((data) => {
            let output = ' <option selected id=0 >Selecione o Usuario</option>';
            data.forEach(function (userDTO) {
                output += `
           <option id=${userDTO.id}>${userDTO.name}</option>
          `;
            });
            document.getElementById('selectUser').innerHTML = output;
        })
}

function getAllDebtor() {
    let then = fetch("http://localhost:8080/debtor/all")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (debtorDTO) {

                output += `<tr>
      <td>${debtorDTO.idDebtor}</td>
      <td>${debtorDTO.username}</td>
      <td>${debtorDTO.totalValue}</td>
      <td>${debtorDTO.description}</td>
      <td>${new Date(debtorDTO.date).toDateString()}</td>
      <td>
      </td>
      <td>  </td>
    </tr>`

            });
            document.getElementById("debtorList").innerHTML = output;
        });
}

function getDebtorById(debtorid) {
    fetch("http://localhost:8080/debtor/" + debtorid)
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (debtor) {
                output += `<tr>
      <td>${debtor.idDebtor}</td>
      <td>${debtor.username}</td>
      <td>${debtor.totalValue}</td>
      <td>${debtor.description}</td>
      <td>${new Date(debtor.date).toDateString()}</td>
      <td>
      </td>
      <td>  <Button variant="outline-success"></Button> </td>
    </tr>
          `
            });
            document.getElementById("debtorList").innerHTML = output;
        })
}

function addDebtor() {
    let selector = document.getElementById('selectUser');
    let idUser = selector[selector.selectedIndex].id;
    let description = document.getElementById("description").value;
    let date = document.getElementById('dataDate').value;
    let totalValue = document.getElementById('dataValue').value;

    fetch('http://localhost:8080/debtor/new', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            idUser: idUser,
            description: description,
            date: date,
            totalValue: totalValue
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

function updateDebtor(debtorId) {
    let selector = document.getElementById('selectUser');
    let idUser = selector[selector.selectedIndex].id;
    let description = document.getElementById("description").value;
    let date = document.getElementById('dataDate').value;
    let totalValue = document.getElementById('dataValue').value;

    fetch("http://localhost:8080/debtor/" + debtorId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            idDebtor: debtorId,
            idUser: idUser,
            description: description,
            date: date,
            totalValue: totalValue
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

function deleteDebtor(debtorId) {
    fetch("http://localhost:8080/debtor/" + debtorId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }
    })
        .then((res) => res.json())

}
