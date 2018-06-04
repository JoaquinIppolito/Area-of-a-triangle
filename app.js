var TriangleArea = function()
{
 var base = parsefloat(document.getElementById('Base').value)
 var height = parsefloat(document.getElementById('Height').value)
 var output = document.getElementById('output')
 var TriangleArea = document.getElementById('Area')
 if(isNaN(base) || isNaN(height))
 {
  output.textContent = "No ingresaste 2 numeros."
 }
 else
 {
  var Area = '0.5' * Base * Height
  console.log(Area);
  output.textContent = Area
 }
}
