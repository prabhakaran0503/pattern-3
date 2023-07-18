var n=prompt("Enter THe Number")

for(let i=1;i<=n; i++)
{
	for(let j=n;j>i;j--)
	{
		document.write("&nbsp;&nbsp");
	}
	for(let k=1;k<=i;k++)
		{
			document.write("*");
			
		}
		for(let l=1;l<=i;l++)
		{
			document.write("*");
			
		}
	document.write("<br>");
}