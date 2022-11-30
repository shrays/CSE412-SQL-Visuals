//database node.js file that contains the connection to the postgres database. This executes the queries which is
//made use of by plotly to display on the website

const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "20300bHAC*",
    host: "localhost",
    port: 5432,
    database: "Oct27"
})
 
 
start()
async function start() {
 
    await connect();
    await topUniversities()
    await techSchoolComparison()
    await techSchoolByCountry()
    await rankVsScore()
    await scoreVsAcademicRep()
    await arizonaSchools()
    client.end()
}
 
async function topUniversities() {
   let query = "SELECT locationCode, COUNT(locationCode) FROM university GROUP BY locationCode ORDER BY COUNT DESC LIMIT 5"
   const data = await performQuery(query);
 
   console.log("The top five countries represented in this college list")
 
   var countries = new Array(data.rows.length)
   var count = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        countries[i] = data.rows[i].locationcode
        count[i] = parseInt(data.rows[i].count)
    }
 
    console.log(countries)
    console.log(count)
}
 
async function techSchoolComparison() {
    let query = "SELECT universityName, arScore, erScore, ifrScore, isrScore FROM university INNER JOIN academicReputation ON University.universityRank = arScoreID INNER JOIN employerReputation ON University.universityRank = erScoreID INNER JOIN internationalfacultyratio ON University.universityRank = ifrScoreID INNER JOIN internationalstudentratio ON University.universityRank = isrScoreID INNER JOIN facultystudentratio ON University.universityRank = fsrScoreID WHERE universityName = 'Nanyang Technological University, Singapore (NTU)' OR universityName = 'The Hong Kong University of Science and Technology' OR universityName = 'KAIST - Korea Advanced Institute of Science & Technology'"
    const data = await performQuery(query);
   
    console.log("")
    console.log("Comparing three technology universities in Asia")
 
    var universities = new Array(data.rows.length)
    var academicRep = new Array(data.rows.length)
    var employerRep = new Array(data.rows.length)
    var intlFacultyRatio = new Array(data.rows.length)
    var intlStudentRatio = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        universities[i] = data.rows[i].universityname
        academicRep[i] = parseInt(data.rows[i].arscore)
        employerRep[i] = parseInt(data.rows[i].erscore)
        intlFacultyRatio[i] = parseInt(data.rows[i].ifrscore)
        intlStudentRatio[i] = parseInt(data.rows[i].isrscore)
    }
 
    console.log(universities)
    console.log(academicRep)
    console.log(employerRep)
    console.log(intlFacultyRatio)
    console.log(intlStudentRatio)
 
}
 
async function techSchoolByCountry() {
 
    let query = "Select locationCode, COUNT(locationCode) FROM university WHERE universityName LIKE '%Tec%' GROUP BY locationCode ORDER BY COUNT DESC LIMIT 8"
    const data = await performQuery(query);
 
    console.log("")
    console.log("Top countries representing technology schools")
   
    var countries = new Array(data.rows.length)
    var count = new Array(data.rows.length)
 
     for(let i = 0; i < data.rows.length; i++) {
         countries[i] = data.rows[i].locationcode
         count[i] = parseInt(data.rows[i].count)
     }
 
     console.log(countries)
     console.log(count)
 
}
 
async function rankVsScore() {
    let query = "SELECT universityname, universityrank, categoryscore FROM University INNER JOIN score ON score.scoreid = University.universityrank LIMIT 500"
    const data = await performQuery(query);
 
    console.log("")
    console.log("Scatter Plot of overall score vs rank for the top 500 universities")
 
    var universities = new Array(data.rows.length)
    var ranks = new Array(data.rows.length)
    var overallScores = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        universities[i] = data.rows[i].universityname
        ranks[i] = parseInt(data.rows[i].universityrank)
        overallScores[i] = parseInt(data.rows[i].categoryscore)
    }
 
    console.log(universities)
    console.log(ranks)
    console.log(overallScores)
}
 
async function scoreVsAcademicRep() {
    let query = "SELECT universityname, categoryscore, arscore FROM University INNER JOIN score ON score.scoreid = University.universityrank INNER JOIN academicreputation ON arscoreID = score.scoreid LIMIT 500"
    const data = await performQuery(query);
 
    console.log("")
    console.log("Scatter Plot of overall score versus academic reputation")
 
    var universities = new Array(data.rows.length)
    var overallScores = new Array(data.rows.length)
    var academicReputation = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        universities[i] = data.rows[i].universityname
        overallScores[i] = parseInt(data.rows[i].categoryscore)
        academicReputation[i] = parseInt(data.rows[i].arscore)
    }
 
    console.log(universities)
    console.log(overallScores)
    console.log(academicReputation)
}

async function arizonaSchools() {
    let query = "SELECT universityName, arscore, cpfscore, erscore, fsrscore, ifrscore, irnscore, isrscore FROM university INNER JOIN academicreputation ON arscoreid = universityRank INNER JOIN citationsperfaculty ON cpfscoreid = universityRank INNER JOIN employerreputation ON erscoreid = universityRank INNER JOIN facultystudentratio ON fsrscoreid = universityRank INNER JOIN internationalfacultyratio ON ifrscoreid = universityrank INNER JOIN internationalresearchnetwork ON irnscoreid = universityrank INNER JOIN internationalstudentratio ON isrscoreid = universityrank WHERE universityName LIKE '%Arizona%'"
    const data = await performQuery(query);
 
    console.log("")
    console.log("Bar chart comparing our three arizona universities")
 
    var universities = new Array(data.rows.length)
    var academicRep = new Array(data.rows.length)
    var citationsPerFaculty = new Array(data.rows.length)
    var employerRep = new Array(data.rows.length)
    var facultyStudentRatios = new Array(data.rows.length)
    var internationalFacultyRatio = new Array(data.rows.length)
    var interantionalResearchNetwork = new Array(data.rows.length)
    var internationalStudentRatio = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        universities[i] = data.rows[i].universityname
        academicRep[i] = parseInt(data.rows[i].arscore)
        citationsPerFaculty[i] = parseInt(data.rows[i].cpfscore)
        employerRep[i] = parseInt(data.rows[i].erscore)
        facultyStudentRatios[i] = parseInt(data.rows[i].fsrscore)
        interantionalResearchNetwork[i] = parseInt(data.rows[i].irnscore)
        internationalFacultyRatio[i] = parseInt(data.rows[i].ifrscore)
        internationalStudentRatio[i] = parseInt(data.rows[i].isrscore)
    }
 
    console.log(universities)
    console.log(academicRep)
    console.log(citationsPerFaculty)
    console.log(employerRep)
    console.log(facultyStudentRatios)
    console.log(internationalFacultyRatio)
    console.log(interantionalResearchNetwork)
    console.log(internationalStudentRatio)

}
 
async function connect() {
    try {
        await client.connect()
    }
    catch(e) {
        console.error('Failed to connect ${e}')
    }
}
 
async function performQuery(query) {
    try {
        const results = await client.query(query)
        return results
 
    }
    catch(e) {
        return []
    }
}
