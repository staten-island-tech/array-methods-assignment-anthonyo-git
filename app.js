const president = [{name: 'Washington', years:[1789,1790,1791,1792,1793,1794,1795,1796,1797]}, 
{name: 'Abraham Lincoln', years: [1861,1862,1863,1864,1865]}]

president.forEach((president) => 
{
    console.log(president.name)
})
president.forEach(president => president.years.forEach(year => console.log(year)));

const fiveyear = president.filter(president => president.years.length > 5);
console.log(fiveyear);