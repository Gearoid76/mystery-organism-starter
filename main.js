// Returns a random DNA base
// Mysterious Organism
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

//console.log(returnRandBase() + ' <- returnRandBase')
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

//console.log(mockUpStrand() + ' <- MockupStrand');  // this I added mockupStrand and newStrand are the sameconsole.log(array +' array')
//console.log(returnRandBase + ' returnRandBase' )


// ----------------     All new code from here    -----------------
const dnaBases = ['A', 'T', 'C', 'G']
mutantBase = dnaBases [Math.floor(Math.random()* 4)]; 
currentBase = dnaBases[Math.floor(Math.random()* 4)];
if (currentBase === mutantBase) {
  mutantBase = dnaBases[Math.floor(Math.random()* 4)]
}

console.log(currentBase + ' currentBase');
console.log(mutantBase + ' mutantBase');
//var randomDna;

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate () {
      let currentBase = '';
      let mutatedBase = '';
      do {
        currentBase = this.dna[Math.floor(Math.random() * 4)];
        mutatedBase = this.dna[Math.floor(Math.random() * 4)];
        
      } while (currentBase === mutatedBase); 
        console.log(currentBase, mutatedBase);
        this.dna.splice(this.dna.indexOf(currentBase), 1, mutatedBase);
        return this.dna;
      },

      compareDNA(obj) {
        let counter = 0;
        this.dna.forEach((item, index) => {
          if (item === obj.dna[index]) {
            counter++;
          }
        });
        let percentage = (counter / this.dna.length) * 100;
        console.log(`speciman ${this.specimanNum} and ${obj.specimanNum} have ${percentage.toFixed(2)}% DNA in common`)
      },

      willLikelySurvive() {
        let filteredArray = [];
        this.dna.filter(index => {
          if (index === 'C' || index === 'G')
          filteredArray.push(index);
        });
        console.log(this.dna)
        console.log(filteredArray)
          if((filteredArray.length / this.dna.length) * 100 >= 60) {
            return true;  
          } else {
            return false;
          }
            }

    }

  }
 let testSample = pAequorFactory(1,mockUpStrand());
 let test2Sample = pAequorFactory(2,mockUpStrand());
 testSample.compareDNA(test2Sample);
 console.log(`The sample will survive `+ testSample.willLikelySurvive());
 