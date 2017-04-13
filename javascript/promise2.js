$(document).ready(function(){

    var dinosaurs = [];


    function writeDOM(){
        var domString = "";
        for(var i=0; i<dinosaurs.length; i++){
            domString += `<h1>${dinosaurs[i].type}</h1>`;
        }
        $("#promises").append(domString);
    }

    //ajax pryamid of doom
    // $.ajax("./db/dinosaurs1.json").done(function(data1){
    //     console.log("data1", data1.dinosaurs1);
    //     dinosaurs = data1.dinosaurs1
    //     $.ajax("./db/dinosaurs2.json").done(function(data2){
    //         console.log("data2", data2.dinosaurs2);
    //         data2.dinosaurs2.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         $.ajax("./db/dinosaurs3.json").done(function(data3){
    //         console.log("data3", data3.dinosaurs3);
    //         data3.dinosaurs3.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         writeDOM(); 
    //     }).fail(function(error3){
    //         console.log(error3);
    //     })
    //     }).fail(function(error2){
    //         console.log(error2);
    //     })
    // }).fail(function(error1){
    //     console.log(error1);
    // })


    var firstDinosaurJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/dinos1.json").done(function(data1){
                resolve(data1.dinosaurs1);
            }).fail(function(error1){
                reject(error1);
            })
        })
    };

    var secondDinosaurJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/dinos2.json").done(function(data2){
                resolve(data2.dinosaurs2);
            }).fail(function(error2){
                reject(error2);
            })
        })
    };

    var thirdDinosaurJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/dinos3.json").done(function(data3){
                resolve(data3.dinosaurs3);
            }).fail(function(error3){
                reject(error3);
            })
        })
    };


    // pyramid of doom with promises
    // firstDinosaurJSON().then(function(jsonData1){
    //     console.log(jsonData1);
    //     dinosaurs = jsonData1;
    //     secondDinosaurJSON().then(function(jsonData2){
    //         console.log(jsonData2);
    //         jsonData2.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         thirdDinosaurJSON().then(function(jsonData3){
    //         console.log(jsonData3);
    //         jsonData3.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         writeDOM();
    //     }).catch(function(jsonDataFail3){
    //         console.log(jsonDataFail3);
    //     });
    //     }).catch(function(jsonDataFail2){
    //         console.log(jsonDataFail2);
    //     });
    // }).catch(function(jsonDataFail1){
    //     console.log(jsonDataFail1);
    // });


    // this is the most ideal method
    // firstDinosaurJSON().then(function(jsonData1){
    //     console.log(jsonData1);
    //     dinosaurs = jsonData1;
    //     return secondDinosaurJSON();
    // }).then(function(jsonData2){
    //     console.log(jsonData2);
    //     jsonData2.forEach(function(dino){
    //         dinosaurs.push(dino);
    //     })
    //     return thirdDinosaurJSON();
    // }).then(function(jsonData3){
    //     console.log("jsonData2", jsonData2);
    //     console.log(jsonData3);
    //     jsonData3.forEach(function(dino){
    //         dinosaurs.push(dino);
    //     })
    //     writeDOM();
    // });

    //this method works the best for this solution
    Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()])
        .then(function(resultz){
            console.log("resultz", resultz);
            resultz.forEach(function(ajaxCalls){
                ajaxCalls.forEach(function(dino){
                    dinosaurs.push(dino);
                })
            })
            writeDOM();
        })
});