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
    await topUniversities()         // PieChart1 -
    await schoolComparison()        // BarChart1 -
    await techSchoolByCountry()     // PieChart2 - 
    await rankVsScore()             // ScatterChart1
    await scoreVsAcademicRep()      // ScatterChart2
    await arizonaSchools()          // BarChart2 -
    client.end()
}
 
async function topUniversities() {
   let query = "SELECT locationCode, COUNT(locationCode) FROM university GROUP BY locationCode ORDER BY COUNT DESC LIMIT 5"
   const data = await performQuery(query);
 
//    console.log("The top five countries represented in this college list")
 
   var PC1Labels = new Array(data.rows.length)
   var PC1Values = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        PC1Labels[i] = data.rows[i].locationcode
        PC1Values[i] = parseInt(data.rows[i].count)
    }
}
 
async function schoolComparison() {
    let query = "SELECT universityName, arScore, erScore, ifrScore, isrScore FROM university INNER JOIN academicReputation ON University.universityRank = arScoreID INNER JOIN employerReputation ON University.universityRank = erScoreID INNER JOIN internationalfacultyratio ON University.universityRank = ifrScoreID INNER JOIN internationalstudentratio ON University.universityRank = isrScoreID WHERE universityName = 'Monash University' OR universityName = 'Brown University' OR universityName = 'Aalto University'"
    const data = await performQuery(query);
   
    // console.log("")
    // console.log("Comparing three technology universities in Asia")
 
    var BC1universities = new Array(data.rows.length)
    var BC1academicRep = new Array(data.rows.length)
    var BC1employerRep = new Array(data.rows.length)
    var BC1intlFacultyRatio = new Array(data.rows.length)
    var BC1intlStudentRatio = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        BC1universities[i] = data.rows[i].universityname
        BC1academicRep[i] = parseInt(data.rows[i].arscore)
        BC1employerRep[i] = parseInt(data.rows[i].erscore)
        BC1intlFacultyRatio[i] = parseInt(data.rows[i].ifrscore)
        BC1intlStudentRatio[i] = parseInt(data.rows[i].isrscore)
    }
}
 
async function techSchoolByCountry() {
 
    let query = "Select locationCode, COUNT(locationCode) FROM university WHERE universityName LIKE '%Tec%' GROUP BY locationCode ORDER BY COUNT DESC LIMIT 8"
    const data = await performQuery(query);
 
    // console.log("")
    // console.log("Top countries representing technology schools")
   
    var PC2countries = new Array(data.rows.length)
    var PC2count = new Array(data.rows.length)
 
     for(let i = 0; i < data.rows.length; i++) {
         PC2countries[i] = data.rows[i].locationcode
         PC2count[i] = parseInt(data.rows[i].count)
     }
}
 
async function rankVsScore() {
    let query = "SELECT universityname, universityrank, categoryscore FROM University INNER JOIN score ON score.scoreid = University.universityrank LIMIT 500"
    const data = await performQuery(query);
 
    // console.log("")
    // console.log("Scatter Plot of overall score vs rank for the top 500 universities")
 
    var SC1universities = new Array(data.rows.length)
    var SC1ranks = new Array(data.rows.length)
    var SC1overallScores = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        SC1universities[i] = data.rows[i].universityname
        SC1ranks[i] = parseInt(data.rows[i].universityrank)
        SC1overallScores[i] = parseInt(data.rows[i].categoryscore)
    }
}
 
async function scoreVsAcademicRep() {
    let query = "SELECT universityname, categoryscore, arscore FROM University INNER JOIN score ON score.scoreid = University.universityrank INNER JOIN academicreputation ON arscoreID = score.scoreid LIMIT 500"
    const data = await performQuery(query);
 
    // console.log("")
    // console.log("Scatter Plot of overall score versus academic reputation")
 
    var SC2universities = new Array(data.rows.length)
    var SC2overallScores = new Array(data.rows.length)
    var SC2academicReputation = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        SC2universities[i] = data.rows[i].universityname
        SC2overallScores[i] = parseInt(data.rows[i].categoryscore)
        SC2academicReputation[i] = parseInt(data.rows[i].arscore)
    }
}

async function arizonaSchools() {
    let query = "SELECT universityName, arscore, cpfscore, erscore, ifrscore, irnscore, isrscore FROM university INNER JOIN academicreputation ON arscoreid = universityRank INNER JOIN citationsperfaculty ON cpfscoreid = universityRank INNER JOIN employerreputation ON erscoreid = universityRank INNER JOIN internationalfacultyratio ON ifrscoreid = universityrank INNER JOIN internationalresearchnetwork ON irnscoreid = universityrank INNER JOIN internationalstudentratio ON isrscoreid = universityrank WHERE universityName LIKE '%Arizona%'"
    const data = await performQuery(query);
 
    // console.log("")
    // console.log("Bar chart comparing our three Arizona universities")
 
    var BC2universities = new Array(data.rows.length)
    var BC2academicRep = new Array(data.rows.length)
    var BC2citationsPerFaculty = new Array(data.rows.length)
    var BC2employerRep = new Array(data.rows.length)
    var BC2internationalFacultyRatio = new Array(data.rows.length)
    var BC2interantionalResearchNetwork = new Array(data.rows.length)
    var BC2internationalStudentRatio = new Array(data.rows.length)
 
    for(let i = 0; i < data.rows.length; i++) {
        BC2universities[i] = data.rows[i].universityname
        BC2academicRep[i] = parseInt(data.rows[i].arscore)
        BC2citationsPerFaculty[i] = parseInt(data.rows[i].cpfscore)
        BC2employerRep[i] = parseInt(data.rows[i].erscore)
        BC2interantionalResearchNetwork[i] = parseInt(data.rows[i].irnscore)
        BC2internationalFacultyRatio[i] = parseInt(data.rows[i].ifrscore)
        BC2internationalStudentRatio[i] = parseInt(data.rows[i].isrscore)
    }
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