


document.getElementById('leadsForm').addEventListener('submit', async function(e) {
   e.preventDefault(); 
   var formData = new FormData(e.target);
    fetch('https://da012034-9385-4e6f-83d3-2a7cc49a83aa.mock.pstmn.io/submitlead', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email')
        }),
        headers: {
            "Content-type": "application/json"    
          }
      })
      .then(function(response){
        console.log(response.status);
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });
});