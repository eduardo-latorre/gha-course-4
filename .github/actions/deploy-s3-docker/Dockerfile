FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install requirements.txt

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]