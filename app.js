var TriangleArea = function()
{
 var base = parsefloat(document.getElementById('base').value)
 var height = parsefloat(document.getElementById('height').value)
 var output = document.getElementById('output')
 if(isNaN(base) || isNaN(height))
 {
  output.textContent = "No ingresaste 2 numeros."
 }
 else
 {
  var Area = '0.5' * base * height;

  output.textContent = "Area = " + TriangleArea ;
 }


};
