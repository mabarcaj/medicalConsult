from django.core.exceptions import ValidationError

# Const and Hyperparameters
AGE_ERROR_MSG = 'Edad inválida'
RUT_ERROR_MSG = 'Rut Inválido'


def isAdult(age):
    return age >= 18


# Age Validaton Method
def validate_age(value):
    if not isAdult(value):
        raise ValidationError(AGE_ERROR_MSG)
    return value


def getParts(rut):
    serie = rut[:-1]
    verif = rut[-1]    

    try:
        verif = int(verif)
    except:
        verif = verif.upper()

    return serie, verif


def genRutIterables(serie):
    rut = list()
    for num in serie:
        rut.append(int(num))
    rut.reverse()

    validSerie = [i for i in range(2, 8)]
    delta = len(rut) - len(validSerie)

    for i in range(delta):
        validSerie.append(validSerie[i])

    return rut, validSerie


def isValid(value):
    nonVerifDigits, verifDigit = getParts(value)
    pseudoRut, validationSerial = genRutIterables(nonVerifDigits)
    aux = list()

    for i in range(len(pseudoRut)):
        aux.append(validationSerial[i] * pseudoRut[i])

    total = sum(aux)
    trueVerif = 11 - (total % 11)

    if trueVerif == 10:
        trueVerif = 'K'

    elif trueVerif == 11:
        trueVerif = 0

    return trueVerif == verifDigit


# RUT Validation Method
def validate_rut(value):
    if not isValid(value):
        raise ValidationError(RUT_ERROR_MSG)
    return value


# Validate Doctor Availability
def validate_doctor_availability(value):
    print(value)
    return value