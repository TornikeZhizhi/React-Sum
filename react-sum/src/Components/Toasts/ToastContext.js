import React, {createContext, useState}  from "react";


export const ToastTheme = createContext()

const Dummy_Toast = [
    {text:"იმ ქართველ კაცს გაუმარჯოს, ღალატს რომ არ იკადრებს,საიმედო მამად,შვილად და მეზობლად ივარგებს..."},
    {text:"ეს გაუმარჯოს იმ წლებს, იმ წამებს გულში რომ დარჩა, როგორც თქმულება და ტკივილს, ტკივილს, ტკივილს უმწარესს რომლის ბადალიც არ მეგულება.- ეს გაუმარჯოს უსიტყვო ტრფობას ენაზე თრთოლვას და უძილობას მეორე შემთხვევით გასროლილ ტყვიას და მოურჩენელ მძიმე ჭრილობას."},
    {text:"მოდით იმ მეგობარს გაუმარჯოს, პირველ ცრემლს რომ შეამჩნევს, მეორეს დაიჭერს და მესამეს შეაჩერებს"},
    {text:"მოდი ისეთ კაცს გაუმარჯოს, რომელიც ღირსი არ არის და უჭირს, და ისეთ კაცს გაუმარჯოს, რომელიც ვალდებული არ არის და დაეხმარება."},
    {text:"ეს იმ მამაკაცს გაუმარჯოს, გულში რომ ეტირება, სახე რომ უღიმის, სიყვარული რომ გაუფრინდება და მაინც იცინის!"},
    {text:"იმ მამაკაცს გაუმარჯოს, ღვინო რომ უყვარს და ღვინოში არ გაგცვლის...ფული უყვარს და ფულში არ გაგცვლის ... ქალები უყვარს და სხვა ქალში არ გაგცვლის..."},
    {text:"გაუმარჯოს იმ ადამიანს, ვისაც დღეში ერთხელ მაინც გაახსენდები."},
    {text:"ნეკნს გაუმარჯოს! იმ ნეკნს, რომელიც ყოველთვის გვტკივა და თან გვსიამოვნებს. იმ ნეკნს გაუმარჯოს, რომელიც გვაკლია და ყოველთვის ჩვენს გვერდითა. მანდილოსნებს გაგიმარჯოთ. სულ ლამაზები და გახარებულები გვენახეთ. ჩვენი გაძლება გქონოდეთ."},
    {text:"საქართველოს მიწას, მისგან ამოსულ ვაზს, ვაზისგან დაწურულ ღვინოს და ამ ღვინით დალეულ - საქართველოს სადღეგრძელოს გაუმარჯოს."},
    {text:"გაუმარჯოს მას ვინც მაღლიდან ლოცულობს ჩვენთვის, მას ვინც წვიმად გვევლინება ფოთოლცვენასავით იჭრება ჩვენში ყველა წასულების ცოცხლად წარმოსახვას გაუმარჯოს."},
    {text:"იმ სიყვარულს გაუმაჯოს, წარსულის გახსენება რომ არ სჭირდება და ცხოვრების ბოლომდე რომ გამოგყვება!"},
    {text:"ეს იმ თვალებს გაუმარჯოს! რომელიც შემოგხედავს, თქმით არაფერს არ გეტყვის და წამის მარადიულობას განატრებინებს."},
    {text:"იმ სილამაზეს გაუმარჯოს სიბნელეშიც რომ ხედავ და მოლანდება რეალობა რომ გგონია, და დარჩენილ სიცოცხლეს, რომ დაუფიქრებლად გაიმეტებ მისთვის, მანდილოსნებს გაუმარჯოს"},
    {text:"ეს იმ ადამიანს გაუმარჯოს, ფრენას რომ ისწავლის, მზესთან მივა, სხივებს შეაგროვებს და თაიგულს გააკეთებს საყვარელი ადამიანისთვის."},
    {text:"მოდით სამ გულს გაუმარჯოს: ხელის გულს, რომლითაც ჩვენ ჩვენს გულისწორებს ხელით ვატარებთ; ფეხის გულს, რომელმაც საყვარელ ადამიანთან მიგვიყვანა; და იმ გულს, რომელშიც დაიბადა და მუდამ იცხოვრებს სიყვარული!!!"},
    {text:"ეს იმ ორ მტრედს გაუმარჯოს, ხეზე რომ ზიან და ქარს ელოდებიან, იქნებ ერთმანეთს შეგვაჯახოსო."},
    {text:"ერთხელ დედამიწაზე ანგელოზი ჩამოფრინდა და დაინახა ხელჩაკიდებული გოგო და ბიჭი: ამას მეგობრობა უწოდა... მეორედ რომ ჩამოვიდა დაინახა გოგო და ბიჭი ჩურჩულებდნენ: ამას ერთგულება უწოდა... ხოლო მესამედ რომ ჩამოვიდა დაინახა ორი საფლავის ქვა გვერდიგვერდ: ამას მარადისობა უწოდა."},
    {text:"ეს არის ქალის, ზოგადად სილამაზის სადღერძელო...  დამერწმუნებით ალბათ რომ, მცენარეებში ყველაზე ლამაზი არის ვარდი, ცხოველებში კი ლამაზს გამოვარჩევთ ცხენს თეთრ რაშს, ადამიანში კი რა თქმა უნდა ქალი...  მოდით გაუმარჯოს ცხენზე ამხედრებულ ქალს, რომელსაც ვარდი უჭირავს ხელში..."},
    {text:"მოდით ამ ჭიქით ხავსმოკიდებულ ეკლესიას, ამ ეკლესიაში დანთებულ სანთელს, ამ სანთლის წინ დაღვრილ ცრემლებს და ამ ცრემლებში განდობილ, საიდუმლოს გაუმარჯოს."},
    {text:"ეს გაუმარჯოს ცაში ღმერთს, მთაში სალოცავს, მიწაზე ჩვენ და მიწის ქვეშ ჩვენ წინაპრებს!!"},
    {text:"ეს იმ კაცს გაუმარჯოს რომელიც ძმობაში დაიშვება და ოჯახში შეიშვება"},
    {text:"ეს გაუმარჯოს კლდეში გამოკვეთილ ხავსიან კედელს, ამ კედელზე დანთებულ წყვილ სანთელს, იმ სანთელზე დაღვრილ ცრემლებს და იმ ცრემლებში ჩაქსოვილ ნაღველს"}
]

const ToastsContext = (props) => {
    const [isDarkMode, setisDarkMode] = useState(true)

    return (
        <ToastTheme.Provider value={Dummy_Toast}>
            {props.children}
        </ToastTheme.Provider>
    )

}

export default ToastsContext;