	function volume_sphere() {
	    //Write your code here
		const radius = Number(document.querySelector('#radius').value);
		const volume = document.querySelector('#volume');
	
		if(radius < 0 || Number.isNaN(radius)) {
			volume.value = 'NaN';
			return;
		}
	
		const vol = ((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
	
		volume.value = vol;
	
	} 
	
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    volume_sphere();
  });
});
