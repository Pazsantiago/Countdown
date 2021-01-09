function EstablecerTiempo(final){
	let f = new Date();
	let restante = (new Date(final) - f + 1000) / 1000;
	let seconds = ('0' + Math.floor(restante % 60)).slice(-2);
	let minutes = ('0' + Math.floor(restante / 60 % 60)).slice(-2);
	let hours = ('0' + Math.floor(restante / 3600 % 24)).slice(-2);
	let days = Math.floor(restante / (3600 * 24));
	return {
		restante,
		seconds,
		minutes,
		hours,
		days
	};
}
function MostrarCuentaAtras(final){
	let days = document.querySelector("#header-number__days");
	let hours = document.querySelector("#header-number__hours");
	let minutes = document.querySelector("#header-number__minutes");
	let seconds = document.querySelector("#header-number__second");
	let contador = setInterval(function(){
		let f = EstablecerTiempo(final);
		days.innerHTML = f.days;
		hours.innerHTML = f.hours;
		minutes.innerHTML = f.minutes;
		seconds.innerHTML = f.seconds;
		if(f.restante <= 1){
			clearInterval(contador);
			localStorage.setItem("Termino", "1");
		}
	}, 1000);
}
MostrarCuentaAtras('Jan 08 2021 20:48:00 GMT-0300');