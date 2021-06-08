import spacy
import pickle
import random
import en_core_web_sm
import re, string, unicodedata
import spacy
import pickle
import random
import en_core_web_sm
import re, string, unicodedata
import nltk
import contractions
import inflect
from bs4 import BeautifulSoup
from nltk import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.stem import LancasterStemmer, WordNetLemmatizer
import sys, fitz
import glob
import io
import sys
import pandas as pd

from nltk.corpus import wordnet




resume1=sys.argv
doc = fitz.open(resume1)
text=""
for page in doc:
    text = text + str(page.getText())
Cv1 = "".join(text.split('\n')) 


file_name ='train_data.pdf'
# resume ='cv.pdf'
resume =file_name
doc = fitz.open(resume)
text=""
for page in doc:
    text = text + str(page.getText())
    
Cv = "".join(text.split('\n'))    
#print(Cv)


def extract_phone_numbers(string):
    r = re.compile(r'(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})')
    phone_numbers = r.findall(string)
    return [re.sub(r'\D', '', number) for number in phone_numbers if len(number) >5]




#Function to extract Email address from a string using regular expressions
def extract_email_addresses(string):
    r = re.compile(r'[\w\.-]+@[\w\.-]+')
    return r.findall(string)
    


def extractPersonName(resumeTitle):
        #a = 'Cv_saurabh+keshari_1234_Resume'
        #a = "1234"
        titleSplit = re.split(r'[`\-=~!@#$%^&*()_+\[\]{};\'\\:"|<,./<>?]', resumeTitle)
        title_isNotDigit = []
        for word in titleSplit:
            if not word.isdigit():
                title_isNotDigit.append(word)
        strr = " ".join(title_isNotDigit)
        strr_list = strr.split(" ")
        #titleSplit = re.findall(r"[\w']+", strr)
        
        Names = []
        for Nouns in strr_list:
            if not wordnet.synsets(Nouns):
                #Not an English word
                Names.append(Nouns)
        titleSplit_lower = to_lowercase(Names)
        titleSplit_cleaned = remove_stopwords(titleSplit_lower)
        personName = "ABC"
        if len(titleSplit_cleaned) > 0:
            if len(titleSplit_cleaned) == 1:
                firstName = titleSplit_cleaned[0]
                personName = firstName
            if len(titleSplit_cleaned) == 2: 
                firstName = titleSplit_cleaned[0]
                secondName = titleSplit_cleaned[1]
                personName = firstName +" " + secondName
            if len(titleSplit_cleaned) >= 3: 
                firstName = titleSplit_cleaned[0]
                secondName = titleSplit_cleaned[1]
                thirdName = titleSplit_cleaned[2]
                personName = firstName +" " + secondName + " " + thirdName
                # print("personname", personName)
        else:
            # print("within else")
            TITLE = r"(?:[A-Z][a-z]*\.\s*)?"
            NAME1 = r"[A-Z][a-z]+,?\s+"
            MIDDLE_I = r"(?:[A-Z][a-z]*\.?\s*)?"
            NAME2 = r"[A-Z][a-z]+"
            name = []
            name = re.findall(TITLE + NAME1 + MIDDLE_I + NAME2, tttt)
            if len(name) > 0:
                rep1 = {"Career": "", "career": "", "Objective":"", "objective": "", "Email": "", "email": "", "Experience Summary": "", "ph": "", "Ph": "", "Professional": "", "Curriculum Vitae": "", "Resume": "", "Profile": "", "Professional": "", "Recruiter": "", "Lead": "", "Summary": "", "HR": "", "new":"", "New": ""}  # define desired replacements here
                rep = dict((re.escape(k), v) for k, v in rep1.items()) 
                #Python 3 renamed dict.iteritems to dict.items so use rep.items() for latest versions
                pattern = re.compile("|".join(rep.keys()))
                personName = pattern.sub(lambda m: rep[re.escape(m.group(0))], name[0])
               
            else:  
                personName = "No name found"
         
        stopwords = ['HR', 'hr','pdf', 'xls', 'docx', 'doc', 'rtf', 'txt', "assembly", "bash", " c " "c++", "c#", "coffeescript", "emacs lisp",
         "go!", "groovy", "haskell", "java", "javascript", "matlab", "max MSP", "objective c", "qlikview", "crm", "CRM", "dynamics",
         "perl", "php","html", "xml", "css", "processing", "python", "ruby", "sml", "swift", "resume","Resume",
         "latex" "unity", "unix" "visual basic" "wolfram language", "xquery", "sql", "node.js", "finance", "liferay",
         "scala", "kdb", "jquery", "mongodb", "CMMI", "ISO", "finance", "Banking", "Finacle", "Oracle Flexcube", "Fiserv", "successfactor", "sf", "success factor", "Success Factor",
         "TCS BaNcs", "FIS Profile", "Self-directed learning", "Collaboration", "Communication", "Resilience", "Big-picture mindset", "Prioritization ", "Creativity ",
         "creative", "Insight", "curiosity", "curious", "Openness", "Teamwork", "Time management", "Emotional intelligence", 
         "quick learner", "problem solver","Customer-service skills", "Planning and organizing", "innovative", "Thinking innovatively and creatively", "Resourceful", "Flexible", "Able to manage own time", "Having self-esteem", 
         "Innovation skills", "Enterprise skills", "Civic or citizenship knowledge and skills", "Sociability", "Self-management", "Integrity", "Honesty", "Human resources", 
         "Participates as a team member", "Works with diversity", "Exercises leadership", "leadership", "Exercises leadership", "Monitors and corrects performance", "Understands systems", 'experience', 'exp', 'exp.']
        querywords = personName.split()
        
        resultwords  = [word for word in querywords if word.lower() not in stopwords]
        result = ' '.join(resultwords)         
        print(result)
        sys.stdout.flush()
        return result
    
    


 
    
def programmingScore(resume, jdTxt, progWords = None):
    skill_weightage = 40
    skill_threshold = 5
    fout = open("results.tex", "a")
    fout.write("\\textbf{Programming Languages:} \\\\\n")
    
    if(progWords == None):
        programming = ["assembly", "bash", " c " "c++", "c#", "coffeescript", "emacs lisp",
         "go!", "groovy", "haskell", "java", "javascript", "matlab", "max MSP", "objective c", 
         "perl", "php","html", "xml", "css", "processing", "python", "ruby", "sml", "swift", 
         "latex" "unity", "unix" "visual basic" "wolfram language", "xquery", "sql", "node.js", 
         "scala", "kdb", "jquery", "mongodb", "CMMI", "ISO", "finance", "Banking", "Finacle", "Oracle Flexcube", "Fiserv", 
         "TCS BaNcs", "FIS Profile"]
    else:
        programming = progWords
    programmingTotal = 0
    
    jdSkillCount = 0
    jdSkillMatched = []
    for i in range(len(programming)):
        if programming[i].lower() in jdTxt.lower() != -1:
            jdSkillCount += 1
            jdSkillMatched.append(programming[i].lower())
   
    
    individualSkillWeightage = 0
    
    if( jdSkillCount > 0):
        individualSkillWeightage = skill_weightage/jdSkillCount
        #print("jd Skills matched are ",individualSkillWeightage)
    
    ResumeProgrammingSkillsMatchedWithJD = []
    for i in range(len(jdSkillMatched)):
        if jdSkillMatched[i].lower() in resume.lower() != -1:
            programmingTotal += 1
            ResumeProgrammingSkillsMatchedWithJD.append(jdSkillMatched[i].lower())
            if not("#" in jdSkillMatched[i]):
                fout.write(jdSkillMatched[i]+", ")
   
    
    
    resumeCorpus = resume.split()
    resumeCorpus = [x.lower() for x in resumeCorpus if isinstance(x, str)]
    jdSkillMatched = [x.lower() for x in jdSkillMatched if isinstance(x, str)]
    list1 = jdSkillMatched
    list2 = resumeCorpus
    results = {}
    for i in list1:
        results[i] = list2.count(i) 
    
    #print("Dictionary is ",results)
    
  
   
    constantValue = (individualSkillWeightage/skill_threshold)
    # Updating Dictionary
    results.update({n: constantValue * results[n] for n in results.keys()})
    #print("updated dict is ", results)

    TotalScore = sum(results.values())
    #print("Score is ", TotalScore)

    fout.close()

    #progScore = min(programmingTotal/10.0, 1) * 5.0


    return TotalScore






def NonTechnicalSkillScore(resume, jd_txt, progWords = None):
    skill_weightage = 20
    skill_threshold = 5
    fout = open("results.tex", "a")
    fout.write("\\textbf{Programming Languages:} \\\\\n")
    
    if(progWords == None):
        NonTechnicalSkill = ["Self-directed learning", "Collaboration", "Communication", "Resilience", "Big-picture mindset", "Prioritization ", "Creativity ",
         "creative", "Insight", "curiosity", "curious", "Openness", "Teamwork", "Time management", "Emotional intelligence", 
         "quick learner", "problem solver","Customer-service skills", "Planning and organizing", "innovative", "Thinking innovatively and creatively", "Resourceful", "Flexible", "Able to manage own time", "Having self-esteem", 
         "Innovation skills", "Enterprise skills", "Civic or citizenship knowledge and skills", "Sociability", "Self-management", "Integrity", "Honesty", "Human resources", 
         "Participates as a team member", "Works with diversity", "Exercises leadership", "leadership", "Exercises leadership", "Monitors and corrects performance", "Understands systems"]
    else:
        NonTechnicalSkill = progWords
    programmingTotal = 0
    

    jdSkillCount = 0
    jdSkillMatched = []
    for i in range(len(NonTechnicalSkill)):
        if NonTechnicalSkill[i].lower() in jd_txt.lower() != -1:
            jdSkillCount += 1
            jdSkillMatched.append(NonTechnicalSkill[i].lower())
 
    if (jdSkillCount > 0):
        individualSkillWeightage = skill_weightage/jdSkillCount
    else :
        individualSkillWeightage = 0

    ResumeProgrammingSkillsMatchedWithJD = []
    for i in range(len(jdSkillMatched)):
        if jdSkillMatched[i].lower() in resume.lower() != -1:
            programmingTotal += 1
            ResumeProgrammingSkillsMatchedWithJD.append(jdSkillMatched[i].lower())
            if not("#" in jdSkillMatched[i]):
                fout.write(jdSkillMatched[i]+", ")
   
     
    resumeCorpus = resume.split()
    """ Modify below """
    resumeCorpus = resumeCorpus + ResumeProgrammingSkillsMatchedWithJD
    resumeCorpus = [x.lower() for x in resumeCorpus if isinstance(x, str)]
    jdSkillMatched = [x.lower() for x in jdSkillMatched if isinstance(x, str)]
    
    list1 = jdSkillMatched
    list2 = resumeCorpus
    results = {}
    for i in list1:
        if list2.count(i) > skill_threshold:
           results[i] = skill_threshold
        else:
           results[i] = list2.count(i)
        

   
    constantValue = (individualSkillWeightage/skill_threshold)
    # Updating Dictionary
    results.update({n: constantValue * results[n] for n in results.keys()})
    #print("updated dict is ", results)

    TotalScore = sum(results.values())
    #print("Score is ", TotalScore)

    fout.close()

    #progScore = min(programmingTotal/10.0, 1) * 5.0


    return TotalScore   

class ExtractExp:
    
    information=[]
    inputString = ''
    tokens = []
    lines = []
    sentences = []
    max_weightage = 40;
    min_variance = 5
    
   
    def get_exp(self,inputString):
        expMatchStrings = ['experience', 'exp ', 'exp.', 'exp:','experience:']
        #TODO need to calculate months also
        yearStrings = ['yrs', 'years', 'yr']
        experience = []
        experience_df=pd.DataFrame(columns=('Type', 'Years', 'Months', 'Location'))
        try:
            pos = 0
            for sentence in self.lines:#find the index of the sentence where the degree is find and then analyse that sentence
                pos = pos+1
                sen=" ".join([words[0].lower() for words in sentence]) #string of words in sentence
                if any(re.search(x,sen) for x in expMatchStrings) and any(re.search(x,sen) for x in yearStrings):
                    sen_tokenised= nltk.word_tokenize(sen)
                    tagged = nltk.pos_tag(sen_tokenised)
                    entities = nltk.chunk.ne_chunk(tagged)
                    for subtree in entities.subtrees():
                        for leaf in subtree.leaves():
                            if leaf[1]=='CD':
                                if re.search('total',sen):
                                    expType = 1
                                else: 
                                    if re.search('overall',sen):
                                        expType = 2
                                    else:
                                        expType = 3
                                        
                                expStr = leaf[0].strip('+').strip('\x07')
                                
                                for match in (expMatchStrings+yearStrings):
                                    expStr = expStr.replace(match,"")
                                    
                                    #If expStr contains only digit
                                    try:
                                        years = float(expStr)
                                    except:
                                        try:
                                            # If expStr is string which can be converted into number
                                            years = w2n.word_to_num(expStr)
                                        except:
                                            # try to remove all non-numeric characters from string except dot
                                            non_decimal = re.compile(r'[^\d.]+')
                                            expStr=non_decimal.sub("", expStr)
                                            try:
                                                years = float(expStr)
                                            except Exception as e:
                                                years = 0
                                                print(e)
                            
                                    if years>0 and years < 30:
                                        experience_df = experience_df.append({'Type': expType, 'Years': years, 'Months': 0, 'Location': pos},ignore_index=True)                                    
                                                                                
            if not experience_df.empty:
                #experience_df = experience_df.sort_values(['Type', 'Years','Location'], ascending=[True, False, True])
                experience_df = experience_df.sort_values(['Type', 'Years'], ascending=[True, False])
                experience = float(experience_df['Years'].iloc[0])
            else:
                experience = 0.0
                        
        except Exception as e:
            print (e)
            
        return experience

    def get_exp_weightage(self,jd_exp,resume_exp):
        
        score = 0
        resume_exp = int(round(resume_exp))
        print(resume_exp)
        if jd_exp.find("-") == -1:
            jd_exp = "0-"+jd_exp[:]
            
       
        
        if resume_exp == 0:
            score = 0
            
        elif resume_exp > min_jd_exp:
            if resume_exp > max_jd_exp:
                score = self.max_weightage - (self.min_variance*(resume_exp-max_jd_exp))
            else:
                score = self.max_weightage
                
        else:
            score = self.max_weightage - (self.min_variance*(min_jd_exp-resume_exp))
        
        if score < 0:
            score = 0
        return score


def normalize(Cv1,Cv):
 Exp = ExtractExp()
 print(extract_phone_numbers(Cv1))
 print(extract_email_addresses(Cv1))
#print(extractPersonName(Cv))
 print('Progarmming Score are',programmingScore(Cv1,Cv));
 print('Non Technical Score are',NonTechnicalSkillScore(Cv1, Cv));
 E1=Exp.get_exp(Cv);
 E2=Exp.get_exp_weightage(Cv1,E1);
 print('Exp Score is',NonTechnicalSkillScore(Cv1, Cv));
 TotalScore= programmingScore(Cv1,Cv)+E2+NonTechnicalSkillScore(Cv1, Cv)
 return TotalScore
print(normalize(Cv1, Cv));
sys.stdout.flush()