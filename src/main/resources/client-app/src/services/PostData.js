export function PostData(type, userData) {
    //let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';
    let BaseURL = 'http://localhost:8080/user/';

    return new Promise((resolve, reject) =>{
        console.log(JSON.stringify(userData));
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
           reject(error);
        });

      });
}