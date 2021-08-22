function calculateEGFR(age, gender, race, serumCreatinine) {
  let egfr;
  if (race == 'black') {
    if (gender == 'male') {
      if (serumCreatinine <= 0.9) {
        egfr = 163 * ((serumCreatinine / 0.9) ** -0.411) * ((0.993)**age)
      } else {
        egfr = 163 * ((serumCreatinine / 0.9) ** -1.209) * ((0.993)**age)
      }
    } else {
      if (serumCreatinine <= 0.7) {
        egfr = 166 * ((serumCreatinine / 0.7) ** -0.329) * ((0.993)**age)
      } else {
        egfr = 166 * ((serumCreatinine / 0.7) ** -1.209) * ((0.993)**age)
      }
    }
  } else {
    if (gender == 'male') {
      if (serumCreatinine <= 0.9) {
        egfr = 141 * ((serumCreatinine / 0.9) ** -0.411) * ((0.993)**age)
      } else {
        egfr = 141 * ((serumCreatinine / 0.9) ** -1.209) * ((0.993)**age)
      }
    } else {
      if (serumCreatinine <= 0.7) {
        egfr = 144 * ((serumCreatinine / 0.7) ** -0.329) * ((0.993)**age)
      } else {
        egfr = 144 * ((serumCreatinine / 0.7) ** -1.209) * ((0.993)**age)
      }
    }
  }
}