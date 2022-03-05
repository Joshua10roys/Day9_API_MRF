// 1. Solving problems using array functions on rest countries data.

// a) Get all the countries from Asia continent / region using Filter function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(this.response);
        var asianRegion = data.filter(value => {
            if (value.region === "Asia") {
                return value;
            }
        }).map(value => value.name);
        console.log(asianRegion);
    }
}

//Output:   (50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam',
//          'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq',
//          'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic",
//          'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)",
//          'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)',
//          'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan',
//          'United Arab Emirates', 'Uzbekistan', 'Viet Nam', 'Yemen']



// b) Get all the countries with a population of less than 2 lakhs using Filter function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(this.response);
        var population = data.filter(value => {
            if (value.population < 200000) {
                return value;
            }
        }).map(value => value.name);
        console.log(population);
    }
}

// Output:  (63)['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba',
//          'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory',
//          'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands',
//          'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)',
//          'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey',
//          'Heard Island and McDonald Islands', 'Holy See', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein',
//          'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island',
//          'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha',
//          'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon',
//          'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Seychelles',
//          'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau',
//          'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']



// c) Print the following details name, capital, flag using forEach function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(this.response);
        data.forEach(value => {
            console.log(`Name:${value.name}, Capital: ${value.capital}, Flag: ${value.flag}`)
        });
    }
}

// Output:
//        Name: Afghanistan, Capital: Kabul, Flag: https://restcountries.eu/data/afg.svg
//        Name: Åland Islands, Capital: Mariehamn, Flag: https://restcountries.eu/data/ala.svg
//        Name: Albania, Capital: Tirana, Flag: https://restcountries.eu/data/alb.svg
//        Name: Algeria, Capital: Algiers, Flag: https://restcountries.eu/data/dza.svg
//        Name: American Samoa, Capital: Pago Pago, Flag: https://restcountries.eu/data/asm.svg
//        Name: Andorra, Capital: Andorra la Vella, Flag: https://restcountries.eu/data/and.svg
//        Name: Angola, Capital: Luanda, Flag: https://restcountries.eu/data/ago.svg
//        Name: Anguilla, Capital: The Valley, Flag: https://restcountries.eu/data/aia.svg
//        Name: Antarctica, Capital: , Flag: https://restcountries.eu/data/ata.svg
//        Name: Antigua and Barbuda, Capital: Saint John's, Flag: https://restcountries.eu/data/atg.svg
//        Name: Argentina, Capital: Buenos Aires, Flag: https://restcountries.eu/data/arg.svg
//        Name: Armenia, Capital: Yerevan, Flag: https://restcountries.eu/data/arm.svg
//        Name: Aruba, Capital: Oranjestad, Flag: https://restcountries.eu/data/abw.svg
//        Name: Australia, Capital: Canberra, Flag: https://restcountries.eu/data/aus.svg
//        Name: Austria, Capital: Vienna, Flag: https://restcountries.eu/data/aut.svg
//        Name: Azerbaijan, Capital: Baku, Flag: https://restcountries.eu/data/aze.svg
//        Name: Bahamas, Capital: Nassau, Flag: https://restcountries.eu/data/bhs.svg
//        Name: Bahrain, Capital: Manama, Flag: https://restcountries.eu/data/bhr.svg
//        Name: Bangladesh, Capital: Dhaka, Flag: https://restcountries.eu/data/bgd.svg
//        Name: Barbados, Capital: Bridgetown, Flag: https://restcountries.eu/data/brb.svg
//        Name: Belarus, Capital: Minsk, Flag: https://restcountries.eu/data/blr.svg
//        Name: Belgium, Capital: Brussels, Flag: https://restcountries.eu/data/bel.svg
//        Name: Belize, Capital: Belmopan, Flag: https://restcountries.eu/data/blz.svg
//        Name: Benin, Capital: Porto - Novo, Flag: https://restcountries.eu/data/ben.svg
//        Name: Bermuda, Capital: Hamilton, Flag: https://restcountries.eu/data/bmu.svg
//        Name: Bhutan, Capital: Thimphu, Flag: https://restcountries.eu/data/btn.svg
//        Name: Bolivia(Plurinational State of), Capital: Sucre, Flag: https://restcountries.eu/data/bol.svg
//        Name: Bonaire, Sint Eustatius and Saba, Capital: Kralendijk, Flag: https://restcountries.eu/data/bes.svg
//        Name: Bosnia and Herzegovina, Capital: Sarajevo, Flag: https://restcountries.eu/data/bih.svg
//        Name: Botswana, Capital: Gaborone, Flag: https://restcountries.eu/data/bwa.svg
//        Name: Bouvet Island, Capital: , Flag: https://restcountries.eu/data/bvt.svg
//        Name: Brazil, Capital: Brasília, Flag: https://restcountries.eu/data/bra.svg
//        Name: British Indian Ocean Territory, Capital: Diego Garcia, Flag: https://restcountries.eu/data/iot.svg
//        Name: United States Minor Outlying Islands, Capital: , Flag: https://restcountries.eu/data/umi.svg
//        Name: Virgin Islands(British), Capital: Road Town, Flag: https://restcountries.eu/data/vgb.svg
//        Name: Virgin Islands(U.S.), Capital: Charlotte Amalie, Flag: https://restcountries.eu/data/vir.svg
//        Name: Brunei Darussalam, Capital: Bandar Seri Begawan, Flag: https://restcountries.eu/data/brn.svg
//        Name: Bulgaria, Capital: Sofia, Flag: https://restcountries.eu/data/bgr.svg
//        Name: Burkina Faso, Capital: Ouagadougou, Flag: https://restcountries.eu/data/bfa.svg
//        Name: Burundi, Capital: Bujumbura, Flag: https://restcountries.eu/data/bdi.svg
//        Name: Cambodia, Capital: Phnom Penh, Flag: https://restcountries.eu/data/khm.svg
//        Name: Cameroon, Capital: Yaoundé, Flag: https://restcountries.eu/data/cmr.svg
//        Name: Canada, Capital: Ottawa, Flag: https://restcountries.eu/data/can.svg
//        Name: Cabo Verde, Capital: Praia, Flag: https://restcountries.eu/data/cpv.svg
//        Name: Cayman Islands, Capital: George Town, Flag: https://restcountries.eu/data/cym.svg
//        Name: Central African Republic, Capital: Bangui, Flag: https://restcountries.eu/data/caf.svg
//        Name: Chad, Capital: N'Djamena, Flag: https://restcountries.eu/data/tcd.svg
//        Name: Chile, Capital: Santiago, Flag: https://restcountries.eu/data/chl.svg
//        Name: China, Capital: Beijing, Flag: https://restcountries.eu/data/chn.svg
//        Name: Christmas Island, Capital: Flying Fish Cove, Flag: https://restcountries.eu/data/cxr.svg
//        Name: Cocos(Keeling) Islands, Capital: West Island, Flag: https://restcountries.eu/data/cck.svg
//        Name: Colombia, Capital: Bogotá, Flag: https://restcountries.eu/data/col.svg
//        Name: Comoros, Capital: Moroni, Flag: https://restcountries.eu/data/com.svg
//        Name: Congo, Capital: Brazzaville, Flag: https://restcountries.eu/data/cog.svg
//        Name: Congo(Democratic Republic of the), Capital: Kinshasa, Flag: https://restcountries.eu/data/cod.svg
//        Name: Cook Islands, Capital: Avarua, Flag: https://restcountries.eu/data/cok.svg
//        Name: Costa Rica, Capital: San José, Flag: https://restcountries.eu/data/cri.svg
//        Name: Croatia, Capital: Zagreb, Flag: https://restcountries.eu/data/hrv.svg
//        Name: Cuba, Capital: Havana, Flag: https://restcountries.eu/data/cub.svg
//        Name: Curaçao, Capital: Willemstad, Flag: https://restcountries.eu/data/cuw.svg
//        Name: Cyprus, Capital: Nicosia, Flag: https://restcountries.eu/data/cyp.svg
//        Name: Czech Republic, Capital: Prague, Flag: https://restcountries.eu/data/cze.svg
//        Name: Denmark, Capital: Copenhagen, Flag: https://restcountries.eu/data/dnk.svg
//        Name: Djibouti, Capital: Djibouti, Flag: https://restcountries.eu/data/dji.svg
//        Name: Dominica, Capital: Roseau, Flag: https://restcountries.eu/data/dma.svg
//        Name: Dominican Republic, Capital: Santo Domingo, Flag: https://restcountries.eu/data/dom.svg
//        Name: Ecuador, Capital: Quito, Flag: https://restcountries.eu/data/ecu.svg
//        Name: Egypt, Capital: Cairo, Flag: https://restcountries.eu/data/egy.svg
//        Name: El Salvador, Capital: San Salvador, Flag: https://restcountries.eu/data/slv.svg
//        Name: Equatorial Guinea, Capital: Malabo, Flag: https://restcountries.eu/data/gnq.svg
//        Name: Eritrea, Capital: Asmara, Flag: https://restcountries.eu/data/eri.svg
//        Name: Estonia, Capital: Tallinn, Flag: https://restcountries.eu/data/est.svg
//        Name: Ethiopia, Capital: Addis Ababa, Flag: https://restcountries.eu/data/eth.svg
//        Name: Falkland Islands(Malvinas), Capital: Stanley, Flag: https://restcountries.eu/data/flk.svg
//        Name: Faroe Islands, Capital: Tórshavn, Flag: https://restcountries.eu/data/fro.svg
//        Name: Fiji, Capital: Suva, Flag: https://restcountries.eu/data/fji.svg
//        Name: Finland, Capital: Helsinki, Flag: https://restcountries.eu/data/fin.svg
//        Name: France, Capital: Paris, Flag: https://restcountries.eu/data/fra.svg
//        Name: French Guiana, Capital: Cayenne, Flag: https://restcountries.eu/data/guf.svg
//        Name: French Polynesia, Capital: Papeetē, Flag: https://restcountries.eu/data/pyf.svg
//        Name: French Southern Territories, Capital: Port - aux - Français, Flag: https://restcountries.eu/data/atf.svg
//        Name: Gabon, Capital: Libreville, Flag: https://restcountries.eu/data/gab.svg
//        Name: Gambia, Capital: Banjul, Flag: https://restcountries.eu/data/gmb.svg
//        Name: Georgia, Capital: Tbilisi, Flag: https://restcountries.eu/data/geo.svg
//        Name: Germany, Capital: Berlin, Flag: https://restcountries.eu/data/deu.svg
//        Name: Ghana, Capital: Accra, Flag: https://restcountries.eu/data/gha.svg
//        Name: Gibraltar, Capital: Gibraltar, Flag: https://restcountries.eu/data/gib.svg
//        Name: Greece, Capital: Athens, Flag: https://restcountries.eu/data/grc.svg
//        Name: Greenland, Capital: Nuuk, Flag: https://restcountries.eu/data/grl.svg
//        Name: Grenada, Capital: St.George's, Flag: https://restcountries.eu/data/grd.svg
//        Name: Guadeloupe, Capital: Basse - Terre, Flag: https://restcountries.eu/data/glp.svg
//        Name: Guam, Capital: Hagåtña, Flag: https://restcountries.eu/data/gum.svg
//        Name: Guatemala, Capital: Guatemala City, Flag: https://restcountries.eu/data/gtm.svg
//        Name: Guernsey, Capital: St.Peter Port, Flag: https://restcountries.eu/data/ggy.svg
//        Name: Guinea, Capital: Conakry, Flag: https://restcountries.eu/data/gin.svg
//        Name: Guinea - Bissau, Capital: Bissau, Flag: https://restcountries.eu/data/gnb.svg
//        Name: Guyana, Capital: Georgetown, Flag: https://restcountries.eu/data/guy.svg
//        Name: Haiti, Capital: Port - au - Prince, Flag: https://restcountries.eu/data/hti.svg
//        Name: Heard Island and McDonald Islands, Capital: , Flag: https://restcountries.eu/data/hmd.svg
//        Name: Holy See, Capital: Rome, Flag: https://restcountries.eu/data/vat.svg
//        Name: Honduras, Capital: Tegucigalpa, Flag: https://restcountries.eu/data/hnd.svg
//        Name: Hong Kong, Capital: City of Victoria, Flag: https://restcountries.eu/data/hkg.svg
//        Name: Hungary, Capital: Budapest, Flag: https://restcountries.eu/data/hun.svg
//        Name: Iceland, Capital: Reykjavík, Flag: https://restcountries.eu/data/isl.svg
//        Name: India, Capital: New Delhi, Flag: https://restcountries.eu/data/ind.svg
//        Name: Indonesia, Capital: Jakarta, Flag: https://restcountries.eu/data/idn.svg
//        Name: Côte d'Ivoire, Capital: Yamoussoukro, Flag: https://restcountries.eu/data/civ.svg
//        Name: Iran(Islamic Republic of), Capital: Tehran, Flag: https://restcountries.eu/data/irn.svg
//        Name: Iraq, Capital: Baghdad, Flag: https://restcountries.eu/data/irq.svg
//        Name: Ireland, Capital: Dublin, Flag: https://restcountries.eu/data/irl.svg
//        Name: Isle of Man, Capital: Douglas, Flag: https://restcountries.eu/data/imn.svg
//        Name: Israel, Capital: Jerusalem, Flag: https://restcountries.eu/data/isr.svg
//        Name: Italy, Capital: Rome, Flag: https://restcountries.eu/data/ita.svg
//        Name: Jamaica, Capital: Kingston, Flag: https://restcountries.eu/data/jam.svg
//        Name: Japan, Capital: Tokyo, Flag: https://restcountries.eu/data/jpn.svg
//        Name: Jersey, Capital: Saint Helier, Flag: https://restcountries.eu/data/jey.svg
//        Name: Jordan, Capital: Amman, Flag: https://restcountries.eu/data/jor.svg
//        Name: Kazakhstan, Capital: Astana, Flag: https://restcountries.eu/data/kaz.svg
//        Name: Kenya, Capital: Nairobi, Flag: https://restcountries.eu/data/ken.svg
//        Name: Kiribati, Capital: South Tarawa, Flag: https://restcountries.eu/data/kir.svg
//        Name: Kuwait, Capital: Kuwait City, Flag: https://restcountries.eu/data/kwt.svg
//        Name: Kyrgyzstan, Capital: Bishkek, Flag: https://restcountries.eu/data/kgz.svg
//        Name: Lao People's Democratic Republic, Capital: Vientiane, Flag: https://restcountries.eu/data/lao.svg
//        Name: Latvia, Capital: Riga, Flag: https://restcountries.eu/data/lva.svg
//        Name: Lebanon, Capital: Beirut, Flag: https://restcountries.eu/data/lbn.svg
//        Name: Lesotho, Capital: Maseru, Flag: https://restcountries.eu/data/lso.svg
//        Name: Liberia, Capital: Monrovia, Flag: https://restcountries.eu/data/lbr.svg
//        Name: Libya, Capital: Tripoli, Flag: https://restcountries.eu/data/lby.svg
//        Name: Liechtenstein, Capital: Vaduz, Flag: https://restcountries.eu/data/lie.svg
//        Name: Lithuania, Capital: Vilnius, Flag: https://restcountries.eu/data/ltu.svg
//        Name: Luxembourg, Capital: Luxembourg, Flag: https://restcountries.eu/data/lux.svg
//        Name: Macao, Capital: , Flag: https://restcountries.eu/data/mac.svg
//        Name: Macedonia(the former Yugoslav Republic of), Capital: Skopje, Flag: https://restcountries.eu/data/mkd.svg
//        Name: Madagascar, Capital: Antananarivo, Flag: https://restcountries.eu/data/mdg.svg
//        Name: Malawi, Capital: Lilongwe, Flag: https://restcountries.eu/data/mwi.svg
//        Name: Malaysia, Capital: Kuala Lumpur, Flag: https://restcountries.eu/data/mys.svg
//        Name: Maldives, Capital: Malé, Flag: https://restcountries.eu/data/mdv.svg
//        Name: Mali, Capital: Bamako, Flag: https://restcountries.eu/data/mli.svg
//        Name: Malta, Capital: Valletta, Flag: https://restcountries.eu/data/mlt.svg
//        Name: Marshall Islands, Capital: Majuro, Flag: https://restcountries.eu/data/mhl.svg
//        Name: Martinique, Capital: Fort - de - France, Flag: https://restcountries.eu/data/mtq.svg
//        Name: Mauritania, Capital: Nouakchott, Flag: https://restcountries.eu/data/mrt.svg
//        Name: Mauritius, Capital: Port Louis, Flag: https://restcountries.eu/data/mus.svg
//        Name: Mayotte, Capital: Mamoudzou, Flag: https://restcountries.eu/data/myt.svg
//        Name: Mexico, Capital: Mexico City, Flag: https://restcountries.eu/data/mex.svg
//        Name: Micronesia(Federated States of), Capital: Palikir, Flag: https://restcountries.eu/data/fsm.svg
//        Name: Moldova(Republic of), Capital: Chișinău, Flag: https://restcountries.eu/data/mda.svg
//        Name: Monaco, Capital: Monaco, Flag: https://restcountries.eu/data/mco.svg
//        Name: Mongolia, Capital: Ulan Bator, Flag: https://restcountries.eu/data/mng.svg
//        Name: Montenegro, Capital: Podgorica, Flag: https://restcountries.eu/data/mne.svg
//        Name: Montserrat, Capital: Plymouth, Flag: https://restcountries.eu/data/msr.svg
//        Name: Morocco, Capital: Rabat, Flag: https://restcountries.eu/data/mar.svg
//        Name: Mozambique, Capital: Maputo, Flag: https://restcountries.eu/data/moz.svg
//        Name: Myanmar, Capital: Naypyidaw, Flag: https://restcountries.eu/data/mmr.svg
//        Name: Namibia, Capital: Windhoek, Flag: https://restcountries.eu/data/nam.svg
//        Name: Nauru, Capital: Yaren, Flag: https://restcountries.eu/data/nru.svg
//        Name: Nepal, Capital: Kathmandu, Flag: https://restcountries.eu/data/npl.svg
//        Name: Netherlands, Capital: Amsterdam, Flag: https://restcountries.eu/data/nld.svg
//        Name: New Caledonia, Capital: Nouméa, Flag: https://restcountries.eu/data/ncl.svg
//        Name: New Zealand, Capital: Wellington, Flag: https://restcountries.eu/data/nzl.svg
//        Name: Nicaragua, Capital: Managua, Flag: https://restcountries.eu/data/nic.svg
//        Name: Niger, Capital: Niamey, Flag: https://restcountries.eu/data/ner.svg
//        Name: Nigeria, Capital: Abuja, Flag: https://restcountries.eu/data/nga.svg
//        Name: Niue, Capital: Alofi, Flag: https://restcountries.eu/data/niu.svg
//        Name: Norfolk Island, Capital: Kingston, Flag: https://restcountries.eu/data/nfk.svg
//        Name: Korea(Democratic People's Republic of), Capital: Pyongyang, Flag: https://restcountries.eu/data/prk.svg
//        Name: Northern Mariana Islands, Capital: Saipan, Flag: https://restcountries.eu/data/mnp.svg
//        Name: Norway, Capital: Oslo, Flag: https://restcountries.eu/data/nor.svg
//        Name: Oman, Capital: Muscat, Flag: https://restcountries.eu/data/omn.svg
//        Name: Pakistan, Capital: Islamabad, Flag: https://restcountries.eu/data/pak.svg
//        Name: Palau, Capital: Ngerulmud, Flag: https://restcountries.eu/data/plw.svg
//        Name: Palestine, State of, Capital: Ramallah, Flag: https://restcountries.eu/data/pse.svg
//        Name: Panama, Capital: Panama City, Flag: https://restcountries.eu/data/pan.svg
//        Name: Papua New Guinea, Capital: Port Moresby, Flag: https://restcountries.eu/data/png.svg
//        Name: Paraguay, Capital: Asunción, Flag: https://restcountries.eu/data/pry.svg
//        Name: Peru, Capital: Lima, Flag: https://restcountries.eu/data/per.svg
//        Name: Philippines, Capital: Manila, Flag: https://restcountries.eu/data/phl.svg
//        Name: Pitcairn, Capital: Adamstown, Flag: https://restcountries.eu/data/pcn.svg
//        Name: Poland, Capital: Warsaw, Flag: https://restcountries.eu/data/pol.svg
//        Name: Portugal, Capital: Lisbon, Flag: https://restcountries.eu/data/prt.svg
//        Name: Puerto Rico, Capital: San Juan, Flag: https://restcountries.eu/data/pri.svg
//        Name: Qatar, Capital: Doha, Flag: https://restcountries.eu/data/qat.svg
//        Name: Republic of Kosovo, Capital: Pristina, Flag: https://restcountries.eu/data/kos.svg
//        Name: Réunion, Capital: Saint - Denis, Flag: https://restcountries.eu/data/reu.svg
//        Name: Romania, Capital: Bucharest, Flag: https://restcountries.eu/data/rou.svg
//        Name: Russian Federation, Capital: Moscow, Flag: https://restcountries.eu/data/rus.svg
//        Name: Rwanda, Capital: Kigali, Flag: https://restcountries.eu/data/rwa.svg
//        Name: Saint Barthélemy, Capital: Gustavia, Flag: https://restcountries.eu/data/blm.svg
//        Name: Saint Helena, Ascension and Tristan da Cunha, Capital: Jamestown, Flag: https://restcountries.eu/data/shn.svg
//        Name: Saint Kitts and Nevis, Capital: Basseterre, Flag: https://restcountries.eu/data/kna.svg
//        Name: Saint Lucia, Capital: Castries, Flag: https://restcountries.eu/data/lca.svg
//        Name: Saint Martin(French part), Capital: Marigot, Flag: https://restcountries.eu/data/maf.svg
//        Name: Saint Pierre and Miquelon, Capital: Saint - Pierre, Flag: https://restcountries.eu/data/spm.svg
//        Name: Saint Vincent and the Grenadines, Capital: Kingstown, Flag: https://restcountries.eu/data/vct.svg
//        Name: Samoa, Capital: Apia, Flag: https://restcountries.eu/data/wsm.svg
//        Name: San Marino, Capital: City of San Marino, Flag: https://restcountries.eu/data/smr.svg
//        Name: Sao Tome and Principe, Capital: São Tomé, Flag: https://restcountries.eu/data/stp.svg
//        Name: Saudi Arabia, Capital: Riyadh, Flag: https://restcountries.eu/data/sau.svg
//        Name: Senegal, Capital: Dakar, Flag: https://restcountries.eu/data/sen.svg
//        Name: Serbia, Capital: Belgrade, Flag: https://restcountries.eu/data/srb.svg
//        Name: Seychelles, Capital: Victoria, Flag: https://restcountries.eu/data/syc.svg
//        Name: Sierra Leone, Capital: Freetown, Flag: https://restcountries.eu/data/sle.svg
//        Name: Singapore, Capital: Singapore, Flag: https://restcountries.eu/data/sgp.svg
//        Name: Sint Maarten(Dutch part), Capital: Philipsburg, Flag: https://restcountries.eu/data/sxm.svg
//        Name: Slovakia, Capital: Bratislava, Flag: https://restcountries.eu/data/svk.svg
//        Name: Slovenia, Capital: Ljubljana, Flag: https://restcountries.eu/data/svn.svg
//        Name: Solomon Islands, Capital: Honiara, Flag: https://restcountries.eu/data/slb.svg
//        Name: Somalia, Capital: Mogadishu, Flag: https://restcountries.eu/data/som.svg
//        Name: South Africa, Capital: Pretoria, Flag: https://restcountries.eu/data/zaf.svg
//        Name: South Georgia and the South Sandwich Islands, Capital: King Edward Point, Flag: https://restcountries.eu/data/sgs.svg
//        Name: Korea(Republic of), Capital: Seoul, Flag: https://restcountries.eu/data/kor.svg
//        Name: South Sudan, Capital: Juba, Flag: https://restcountries.eu/data/ssd.svg
//        Name: Spain, Capital: Madrid, Flag: https://restcountries.eu/data/esp.svg
//        Name: Sri Lanka, Capital: Colombo, Flag: https://restcountries.eu/data/lka.svg
//        Name: Sudan, Capital: Khartoum, Flag: https://restcountries.eu/data/sdn.svg
//        Name: Suriname, Capital: Paramaribo, Flag: https://restcountries.eu/data/sur.svg
//        Name: Svalbard and Jan Mayen, Capital: Longyearbyen, Flag: https://restcountries.eu/data/sjm.svg
//        Name: Swaziland, Capital: Lobamba, Flag: https://restcountries.eu/data/swz.svg
//        Name: Sweden, Capital: Stockholm, Flag: https://restcountries.eu/data/swe.svg
//        Name: Switzerland, Capital: Bern, Flag: https://restcountries.eu/data/che.svg
//        Name: Syrian Arab Republic, Capital: Damascus, Flag: https://restcountries.eu/data/syr.svg
//        Name: Taiwan, Capital: Taipei, Flag: https://restcountries.eu/data/twn.svg
//        Name: Tajikistan, Capital: Dushanbe, Flag: https://restcountries.eu/data/tjk.svg
//        Name: Tanzania, United Republic of, Capital: Dodoma, Flag: https://restcountries.eu/data/tza.svg
//        Name: Thailand, Capital: Bangkok, Flag: https://restcountries.eu/data/tha.svg
//        Name: Timor - Leste, Capital: Dili, Flag: https://restcountries.eu/data/tls.svg
//        Name: Togo, Capital: Lomé, Flag: https://restcountries.eu/data/tgo.svg
//        Name: Tokelau, Capital: Fakaofo, Flag: https://restcountries.eu/data/tkl.svg
//        Name: Tonga, Capital: Nuku'alofa, Flag: https://restcountries.eu/data/ton.svg
//        Name: Trinidad and Tobago, Capital: Port of Spain, Flag: https://restcountries.eu/data/tto.svg
//        Name: Tunisia, Capital: Tunis, Flag: https://restcountries.eu/data/tun.svg
//        Name: Turkey, Capital: Ankara, Flag: https://restcountries.eu/data/tur.svg
//        Name: Turkmenistan, Capital: Ashgabat, Flag: https://restcountries.eu/data/tkm.svg
//        Name: Turks and Caicos Islands, Capital: Cockburn Town, Flag: https://restcountries.eu/data/tca.svg
//        Name: Tuvalu, Capital: Funafuti, Flag: https://restcountries.eu/data/tuv.svg
//        Name: Uganda, Capital: Kampala, Flag: https://restcountries.eu/data/uga.svg
//        Name: Ukraine, Capital: Kiev, Flag: https://restcountries.eu/data/ukr.svg
//        Name: United Arab Emirates, Capital: Abu Dhabi, Flag: https://restcountries.eu/data/are.svg
//        Name: United Kingdom of Great Britain and Northern Ireland, Capital: London, Flag: https://restcountries.eu/data/gbr.svg
//        Name: United States of America, Capital: Washington, D.C., Flag: https://restcountries.eu/data/usa.svg
//        Name: Uruguay, Capital: Montevideo, Flag: https://restcountries.eu/data/ury.svg
//        Name: Uzbekistan, Capital: Tashkent, Flag: https://restcountries.eu/data/uzb.svg
//        Name: Vanuatu, Capital: Port Vila, Flag: https://restcountries.eu/data/vut.svg
//        Name: Venezuela(Bolivarian Republic of), Capital: Caracas, Flag: https://restcountries.eu/data/ven.svg
//        Name: Viet Nam, Capital: Hanoi, Flag: https://restcountries.eu/data/vnm.svg
//        Name: Wallis and Futuna, Capital: Mata - Utu, Flag: https://restcountries.eu/data/wlf.svg
//        Name: Western Sahara, Capital: El Aaiún, Flag: https://restcountries.eu/data/esh.svg
//        Name: Yemen, Capital: Sana'a, Flag: https://restcountries.eu/data/yem.svg
//        Name: Zambia, Capital: Lusaka, Flag: https://restcountries.eu/data/zmb.svg
//        Name: Zimbabwe, Capital: Harare, Flag: https://restcountries.eu/data/zwe.svg



// d) Print the total population of countries using reduce function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(this.response);
        var totalPopulation = data.reduce((sumVal, currVal) => sumVal + currVal.population, 0)
        console.log(totalPopulation);
    }
}

// Output: 7349137231



// e) Print the country which uses US Dollars as currency.

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(this.response);
        var dollerCurrency = data.filter(value => {
            if (value.currencies[0].code === "USD") {
                return value
            }
        }).map(value => value.name);
        console.log(dollerCurrency);
    }
}

// Output:  (14)['American Samoa', 'Bonaire, Sint Eustatius and Saba', 'British Indian Ocean Territory',
//          'United States Minor Outlying Islands', 'Virgin Islands (U.S.)', 'Ecuador', 'El Salvador', 'Guam',
//          'Marshall Islands', 'Northern Mariana Islands', 'Puerto Rico', 'Timor-Leste', 'Turks and Caicos Islands', 'United States of America']
