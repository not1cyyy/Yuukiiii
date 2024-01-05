const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  name: "work",
  aliases: [],
  execute: async (client, message, args) => {

    let user = message.author;
    let author = await db.fetch(`work_${message.author.id}`)

    let timeout = 600000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));

      let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:x:  You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {

      let jobs = [
        'Programmer', 'Builder', 'Waiter', 'Busboy', 'Chef', 'Mechanic', 'Engineer',
        'Teacher', 'Doctor', 'Nurse', 'Artist', 'Police Officer', 'Firefighter',
        'Dentist', 'Pharmacist', 'Plumber', 'Electrician', 'Architect', 'Pilot',
        'Veterinarian', 'Graphic Designer', 'Financial Analyst', 'Real Estate Agent',
        'Librarian', 'Writer', 'Journalist', 'Chef', 'Barista', 'Accountant',
        'Physical Therapist', 'Chemist', 'Biologist', 'Psychologist', 'Actor',
        'Marketing Manager', 'Sales Representative', 'Human Resources Manager',
        'Event Planner', 'Flight Attendant', 'Musician', 'Economist', 'Professor',
        'Social Worker', 'Software Developer', 'Interior Designer', 'Mechanical Engineer',
        'Civil Engineer', 'Aerospace Engineer', 'Data Scientist', 'Chef', 'Geologist',
        'Fashion Designer', 'Photographer', 'Dietitian', 'Athletic Trainer', 'Translator',
        'IT Manager', 'Electrician', 'Paralegal', 'Executive Assistant', 'Orthodontist',
        'Forensic Scientist', 'Meteorologist', 'Marine Biologist', 'Embryologist',
        'Zoologist', 'Orthopedic Surgeon', 'Radiologist', 'Pediatrician', 'Surgeon',
        'Anesthesiologist', 'Neurologist', 'Cardiologist', 'Oncologist', 'Gastroenterologist',
        'Endocrinologist', 'Hematologist', 'Optometrist', 'Chiropractor', 'Podiatrist',
        'Audiologist', 'Speech Therapist', 'Veterinary Technician', 'Dental Hygienist',
        'Phlebotomist', 'Radiation Therapist', 'Surgical Technologist', 'EMT', 'Paramedic',
        'Flight Paramedic', 'Pharmacy Technician', 'Medical Assistant', 'Dietary Aide',
        'Physical Therapy Assistant', 'Occupational Therapy Assistant', 'Cardiovascular Technologist',
        'Diagnostic Medical Sonographer', 'Respiratory Therapist', 'Orthotist', 'Prosthetist'
      ];


      let result = Math.floor((Math.random() * jobs.length));
      let amount = Math.floor(Math.random() * 100) + 1;
      let embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage("https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
        .setDescription(`:white_check_mark: You worked as a ${jobs[result]} and earned ${amount} coins`);
      message.channel.send(embed1)

      db.add(`money_${message.author.id}`, amount)
      db.set(`work_${message.author.id}`, Date.now())
    };
  }


}
module.exports.help = {
  name: "work",
  description: "Work and get money",
  usage: "work",
  type: "Economy"
}

