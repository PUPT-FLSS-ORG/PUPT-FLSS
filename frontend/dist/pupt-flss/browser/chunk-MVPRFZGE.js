import{a as c}from"./chunk-EMZRNCIP.js";import{c as a}from"./chunk-DKHW3YWA.js";import{Z as i,ca as s,g as u}from"./chunk-NSU275EB.js";var p=(()=>{class e{http;baseUrl=c.apiUrl;curriculaSubject=new u([]);constructor(r){this.http=r}getCurricula(){return this.http.get(`${this.baseUrl}/curricula`)}getCurriculumByYear(r){return this.http.get(`${this.baseUrl}/curricula-details/${r}`)}getProgramsByCurriculumYear(r){return this.http.get(`${this.baseUrl}/programs-by-curriculum-year/${r}`)}getAllPrograms(){return this.http.get(`${this.baseUrl}/programs`)}addProgramToCurriculum(r,t){return this.http.post(`${this.baseUrl}/addProgramToCurriculum`,{curriculum_year:r,program_id:t})}removeProgramFromCurriculum(r,t){return this.http.post(`${this.baseUrl}/removeProgramFromCurriculum`,{curriculum_year:r,program_id:t})}mapSemesterToEnum(r){switch(r){case 1:return"First Semester";case 2:return"Second Semester";case 3:return"Summer Semester";default:return`Semester ${r}`}}addCurriculum(r){return this.http.post(`${this.baseUrl}/addCurriculum`,r)}updateCurriculum(r,t){return this.http.put(`${this.baseUrl}/updateCurriculum/${r}`,t)}deleteCurriculum(r){return this.http.post(`${this.baseUrl}/deleteCurriculum`,{curriculum_year:r})}copyCurriculum(r,t){return this.http.post(`${this.baseUrl}/copyCurriculum`,{curriculum_id:r,new_curriculum_year:t})}addCourse(r){return this.http.post(`${this.baseUrl}/addCourse`,r)}updateCourse(r,t){return this.http.put(`${this.baseUrl}/courses/${r}`,t)}deleteCourse(r){return this.http.delete(`${this.baseUrl}/courses/${r}`)}static \u0275fac=function(t){return new(t||e)(s(a))};static \u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{p as a};