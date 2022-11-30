const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "20300bHAC*",
    host: "localhost",
    port: 5432,
    database: "Oct27"
})
 
client.connect()
.then(() => console.log("Connected successfully"))
.catch(e => console.log)
.finally(() => client.end())
// start()
// async function start() {
 
//     await connect();
//     await topUniversities()                  Pie
//     await techSchoolComparison()             Bar - change schools
//     await topAcademicEmployerComparison()    
//     await techSchoolByCountry()              Pie
//     await academicVsFaculty()                
//     await employerVsCitation()               
//     client.end()
// }
 
// async function topUniversities() {
//    let query = "SELECT locationCode, COUNT(locationCode) FROM university GROUP BY locationCode ORDER BY COUNT DESC LIMIT 5"
//    const data = await performQuery(query);
 
//    console.log("The top five countries represented in this college list")
 
//    var countries = new Array(data.rows.length)
//    var count = new Array(data.rows.length)
 
//     for(let i = 0; i < data.rows.length; i++) {
//         countries[i] = data.rows[i].locationcode
//         count[i] = parseInt(data.rows[i].count)
//     }
 
//     console.log(countries)
//     console.log(count)
// }
 
// async function techSchoolComparison() {
//     let query = "SELECT universityName, arScore, erScore, ifrScore, isrScore FROM university INNER JOIN academicReputation ON University.universityRank = arScoreID INNER JOIN employerReputation ON University.universityRank = erScoreID INNER JOIN internationalfacultyratio ON University.universityRank = ifrScoreID INNER JOIN internationalstudentratio ON University.universityRank = isrScoreID INNER JOIN facultystudentratio ON University.universityRank = fsrScoreID WHERE universityName = 'Nanyang Technological University, Singapore (NTU)' OR universityName = 'The Hong Kong University of Science and Technology' OR universityName = 'KAIST - Korea Advanced Institute of Science & Technology'"
//     const data = await performQuery(query);
   
//     console.log("")
//     console.log("Comparing three technology universities in Asia")
 
//     var universities = new Array(data.rows.length)
//     var academicRep = new Array(data.rows.length)
//     var employerRep = new Array(data.rows.length)
//     var intlFacultyRatio = new Array(data.rows.length)
//     var intlStudentRatio = new Array(data.rows.length)
 
//     for(let i = 0; i < data.rows.length; i++) {
//         //console.table(data.rows)
//         universities[i] = data.rows[i].universityname
//         academicRep[i] = parseInt(data.rows[i].arscore)
//         employerRep[i] = parseInt(data.rows[i].erscore)
//         intlFacultyRatio[i] = parseInt(data.rows[i].ifrscore)
//         intlStudentRatio[i] = parseInt(data.rows[i].isrscore)
//     }
 
//     console.log(universities)
//     console.log(academicRep)
//     console.log(employerRep)
//     console.log(intlFacultyRatio)
//     console.log(intlStudentRatio)
 
// }
 
// async function topAcademicEmployerComparison() {
//     let query = "SELECT universityName, arScore, erScore FROM university INNER JOIN academicreputation ON University.universityrank = arScoreID INNER JOIN employerReputation ON University.universityrank = erScoreID WHERE arScore > 99.5 AND erScore > 98 ORDER BY arScore DESC"
//     const data = await performQuery(query);
 
//     console.log("")
//     console.log("Comparing top 12 universities for academic and employer reputation")
 
//     var universities = new Array(data.rows.length)
//     var academicRep = new Array(data.rows.length)
//     var employerRep = new Array(data.rows.length)
 
//     for(let i = 0; i < data.rows.length; i++) {
//        // console.table(data.rows)
//         universities[i] = data.rows[i].universityname
//         academicRep[i] = parseInt(data.rows[i].arscore)
//         employerRep[i] = parseInt(data.rows[i].erscore)
//     }
 
//     console.log(universities)
//     console.log(academicRep)
//     console.log(employerRep)
 
// }
 
// async function techSchoolByCountry() {
 
//     let query = "Select locationCode, COUNT(locationCode) FROM university WHERE universityName LIKE '%Tec%' GROUP BY locationCode ORDER BY COUNT DESC LIMIT 8"
//     const data = await performQuery(query);
 
//     console.log("")
//     console.log("Top countries representing technology schools")
   
//     var countries = new Array(data.rows.length)
//     var count = new Array(data.rows.length)
 
//      for(let i = 0; i < data.rows.length; i++) {
//          countries[i] = data.rows[i].locationcode
//          count[i] = parseInt(data.rows[i].count)
//      }
 
//      console.log(countries)
//      console.log(count)
 
// }
 
// async function academicVsFaculty() {
//     let query = "SELECT universityName, arscore, fsrscore FROM university INNER JOIN academicreputation ON university.universityrank = academicreputation.arscoreid INNER JOIN facultystudentratio ON university.universityrank = facultystudentratio.fsrscoreid WHERE arscore > 70 AND fsrscore > 70"
//     const data = await performQuery(query);
 
//     console.log("")
//     console.log("Scatter Plot of academic reputation vs faculty student ratio for the top 40+ universities")
 
//     var universities = new Array(data.rows.length)
//     var academicRep = new Array(data.rows.length)
//     var facultyStudentRatios = new Array(data.rows.length)
 
//     for(let i = 0; i < data.rows.length; i++) {
//         universities[i] = data.rows[i].universityname
//         academicRep[i] = parseInt(data.rows[i].arscore)
//         facultyStudentRatios[i] = parseInt(data.rows[i].fsrscore)
//     }
 
//     console.log(universities)
//     console.log(academicRep)
//     console.log(facultyStudentRatios)
// }
 
// async function employerVsCitation() {
//     let query = "SELECT universityName, cpfscore, erscore FROM university INNER JOIN citationsPerFaculty ON university.universityrank = citationsPerFaculty.cpfscoreid INNER JOIN employerreputation ON university.universityrank = employerReputation.erscoreid WHERE cpfscore > 45 AND cpfscore < 80 AND erscore > 45 AND erscore < 80"
//     const data = await performQuery(query);
 
//     console.log("")
//     console.log("Scatter Plot of employer reputation vs citations per faculty for mid-tier universities")
 
//     var universities = new Array(data.rows.length)
//     var citationsPerFacultyMembers = new Array(data.rows.length)
//     var employerReputations = new Array(data.rows.length)
 
//     for(let i = 0; i < data.rows.length; i++) {
//         universities[i] = data.rows[i].universityname
//         citationsPerFacultyMembers[i] = parseInt(data.rows[i].cpfscore)
//         employerReputations[i] = parseInt(data.rows[i].erscore)
//     }
 
//     console.log(universities)
//     console.log(citationsPerFacultyMembers)
//     console.log(employerReputations)
// }
 
// async function connect() {
//     try {
//         await client.connect()
//     }
//     catch(e) {
//         console.error('Failed to connect ${e}')
//     }
// }
 
// async function performQuery(query) {
//     try {
//         const results = await client.query(query)
//         return results
 
//     }
//     catch(e) {
//         return []
//     }
// }
