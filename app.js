const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b71a658ca3msh1407b4b55e3d999p134be8jsn7c7b29462668',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        $results.innerHTML =    JSON.stringify(ipInfo, null, 5)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})